import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Label from "../../components/Label";
import { StudentsContext } from "../../context/StudentsApp";
function student() {
  const [id, setId] = useState(null);
  const [user, setUser] = useState(null);
  const { getStudent, studentById } = useContext(StudentsContext);
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      setId(Number(router.query.id));
    } else return;
  }, [router.query.id]);
  useEffect(() => {
    if (id) {
      getStudent(id);
    } else return;
  }, [id]);
  useEffect(() => {
    // setUser(studentById);
    studentById?.map((student) => {
      setUser({
        name: student?.name,
        age: student?.age.toString(),
        number: student?.number.toString(),
        address: student?.studentaddress,
        courses: student?.courses,
        grades: student?.grades,
        attendance: student?.attendance,
      });
    });
  }, [studentById]);
  console.log("====================================");
  console.log(user);
  console.log("====================================");

  return (
    <div className="container cstmContainer">
      <div className="row">
        <div className="col-sm-12">
          <Heading
            heading={"Student Info"}
            color={"white"}
            size={null}
            alignment={"center"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label classes={"me-3"} text={"Name:"} color={"#fff"} size={"14px"} />
          <Label
            classes={"ml-5"}
            text={user?.name ? user?.name : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label classes={"me-3"} text={"Age:"} color={"#fff"} size={"14px"} />
          <Label
            classes={"ml-5"}
            text={user?.age ? user?.age : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Address:"}
            color={"#fff"}
            size={"14px"}
          />
          <Label
            classes={"ml-5"}
            text={user?.address ? user?.address : 'N/A'}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Number:"}
            color={"#fff"}
            size={"14px"}
          />
          <Label
            classes={"ml-5"}
            text={user?.number ? user?.number : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Courses:"}
            color={"#fff"}
            size={"14px"}
          />
          <Label
            classes={"ml-5"}
            text={user?.courses?.length ? user?.courses : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Grades:"}
            color={"#fff"}
            size={"14px"}
          />
          <Label
            classes={"ml-5"}
            text={user?.grades?.length ? user?.grades : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Attendance:"}
            color={"#fff"}
            size={"14px"}
          />
          <Label
            classes={"ml-5"}
            text={user?.attendance?.length ? user?.attendance : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
      </div>
    </div>
  );
}

export default student;
