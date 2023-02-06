import React, { useContext, useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Table from "../../components/Table";
import Heading from "../../components/Heading";
import { StudentsContext } from "../../context/StudentsApp";
import ModalComponent from "../../components/Modal";
import SelectComponent from "../../components/Select";
import InputFeilds from "../../components/InputFeilds";
function Students() {
  const {
    studentsList,
    assignCourse,
    getAssignCourses,
    assignedCourses,
    setAssignedCourses,
    addGradeToCourse,
    markAttendanceToAssignedCourses,
    coursesList
  } = useContext(StudentsContext);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState(null);
  const [assignedCoursesForGrades, setassignedCoursesForGrades] = useState([]);
  const [marks, setMarks] = useState("");
  const [attendance, setAttendance] = useState("");
  const [courseIndex, setCourseIndex] = useState("");
  console.log('====================================');
  console.log(coursesList);
  console.log('====================================');
  const [originalArray, setOriginalArray] = useState(null);
  const [options, setOptions] = useState(originalArray);
  useEffect(() => {
    let courses = []
    if(coursesList){
      coursesList?.map(course=>{
        courses.push({value:course?.name,label:course?.name})
      })
    }
    setOriginalArray(courses)
    setOptions(courses)
  }, [coursesList])
  
  useEffect(() => {
    let gradesCourses = [];
    originalArray?.map((option) => {
      assignedCourses?.[0]?.map((assignItem) => {
        if (option?.value == assignItem) {
          gradesCourses.push(option);
        }
      });
    });
    if(assignedCourses?.[0]?.length){
      setOptions(originalArray.filter(val => !gradesCourses.includes(val)))
      setassignedCoursesForGrades(gradesCourses)
    }
    else{
      setOptions(originalArray);
      setassignedCoursesForGrades([])
    }
  }, [assignedCourses]);
  const modalBody = () => {
    return (
      <div>
        <SelectComponent
          options={modalType == "grades" || modalType == "attendance" ? assignedCoursesForGrades : options}
          setCourses={modalType == "grades" || modalType == "attendance" ? setCourseIndex : setCourses}
          type={modalType}
        />
        {modalType == "grades" || modalType == "attendance" ? (
          <div className="w-100 d-flex mt-3 mb-3">
            <InputFeilds
              containerWidth={"w-100"}
              label={ modalType == "grades" ? "Number" : "Attendance"}
              labelColor={"white"}
              placeholder={modalType == "grades" ? null : "%"}
              labelFontSize={"10px"}
              setState={modalType == "grades" ? setMarks : setAttendance}
              state={modalType == "grades" ? marks : attendance}
            />
          </div>
        ) : null}
      </div>
    );
  };
  return (
    <div className="container cstmContainer">
      <div className="row">
        <div className="col-sm-12">
          <Heading
            heading={"Students"}
            color={"white"}
            size={null}
            alignment={"center"}
          />
        </div>
        <div className="col-sm-12 d-flex justify-content-end">
          <button className="addStudentButton">
            <Link className="nav-link active" href="/students/addStudent">
              <FontAwesomeIcon icon={faPlus} /> Add Student
            </Link>
          </button>
        </div>
        <div className="col-sm-12">
          <Table
            list={studentsList}
            setId={setId}
            setShowModal={setShowModal}
            getAssignCourses={getAssignCourses}
            setModalType={setModalType}
          />
          {modalType == "courses" ? (
            <ModalComponent
              showModal={showModal}
              setShowModal={setShowModal}
              id={id}
              heading={"Add Courses"}
              body={modalBody()}
              courses={courses}
              modalFunction={assignCourse}
              modalType={modalType}
            />
          ) : modalType == "grades" ? (
            <ModalComponent
              showModal={showModal}
              setShowModal={setShowModal}
              id={id}
              heading={"Add Grades"}
              body={modalBody()}
              courses={courseIndex}
              modalFunction={addGradeToCourse}
              modalType={modalType}
              marks={marks}
            />
          ) : (
            <ModalComponent
              showModal={showModal}
              setShowModal={setShowModal}
              id={id}
              heading={"Add Attendance"}
              body={modalBody()}
              courses={courseIndex}
              modalFunction={markAttendanceToAssignedCourses}
              modalType={modalType}
              attendance={attendance}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Students;
