import React, { useContext, useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Table from "../../components/Table";
import Heading from "../../components/Heading";
import { StudentsContext } from "../../context/StudentsApp";
import ModalComponent from "../../components/Modal";
import InputFeilds from "../../components/InputFeilds";
function Students() {
  const {
    coursesList,
    addCourses,
  } = useContext(StudentsContext);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [course, setCourse] = useState(null);
  const [fees, setFees] = useState(null);
  const [id, setId] = useState(null);
  
  const modalBody = () => {
    return (
      <div>
        <div className="w-100 d-flex mt-3 mb-3">
          <InputFeilds
            containerWidth={"w-100"}
            label={"Name"}
            labelColor={"white"}
            placeholder={"Name"}
            labelFontSize={"10px"}
            setState={setCourse}
            state={course}
          />
        </div>
        <div className="w-100 d-flex mt-3 mb-3">
          <InputFeilds
            containerWidth={"w-100"}
            label={"Fees"}
            labelColor={"white"}
            placeholder={"Fees"}
            labelFontSize={"10px"}
            setState={setFees}
            state={fees}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="container cstmContainer">
      <div className="row">
        <div className="col-sm-12">
          <Heading
            heading={"Courses"}
            color={"white"}
            size={null}
            alignment={"center"}
          />
        </div>
        <div className="col-sm-12 d-flex justify-content-end">
          <button
            className="addStudentButton"
            onClick={() => {
              setCourse(null)
              setFees(null)
              setShowModal(true);
              setModalType("addCourse");
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Course
          </button>
        </div>
        <div className="col-sm-12">
          <Table
            list={coursesList}
            setId={setId}
            setShowModal={setShowModal}
            getAssignCourses={null}
            setModalType={setModalType}
            type={"addCourse"}
          />
          {modalType == "addCourse" ? (
            <ModalComponent
              showModal={showModal}
              setShowModal={setShowModal}
              id={id}
              heading={"Add Courses"}
              body={modalBody()}
              courseNames={course}
              fees={fees}
              modalFunction={addCourses}
              modalType={modalType}
            />
          ) : (
            <ModalComponent
            // showModal={showModal}
            // setShowModal={setShowModal}
            // id={id}
            // heading={"Add Attendance"}
            // body={modalBody()}
            // courses={null}
            // modalFunction={markAttendanceToAssignedCourses}
            // modalType={modalType}
            // attendance={attendance}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Students;
