import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Label from "../../components/Label";
import { StudentsContext } from "../../context/StudentsApp";
function student() {
  const [id, setId] = useState(null);
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
  useEffect(() => {}, [studentById]);

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
            text={studentById?.name ? studentById?.name : "N/A"}
            color={"#fff"}
            size={"14px"}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label classes={"me-3"} text={"Age:"} color={"#fff"} size={"14px"} />
          <Label
            classes={"ml-5"}
            text={
              studentById?.age?.toString()
                ? studentById?.age?.toString()
                : "N/A"
            }
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
            text={
              studentById?.studentaddress ? studentById?.studentaddress : "N/A"
            }
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
            text={
              studentById?.number?.toString()
                ? studentById?.number?.toString()
                : "N/A"
            }
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
          {studentById?.courses?.length ? (
            studentById?.courses?.toString() != 0 ? (
              studentById?.courses?.map((course, index) => {
                const comma =
                  index == studentById?.courses?.length - 1 ? "" : ",";
                return (
                  <Label
                    key={index}
                    classes={"ml-5"}
                    text={course + comma}
                    color={"#fff"}
                    size={"14px"}
                  />
                );
              })
            ) : <Label classes={"ml-5"} text={"N/A"} color={"#fff"} size={"14px"} />
          ) : (
            <Label classes={"ml-5"} text={"N/A"} color={"#fff"} size={"14px"} />
          )}
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Grades:"}
            color={"#fff"}
            size={"14px"}
          />
          {studentById?.grades?.length ? (
            studentById?.grades?.toString() != 0 ? (
              studentById?.grades?.map((grade, index) => {
                const comma =
                  index == studentById?.courses?.length - 1 ? "" : ",";
                return (
                  <Label
                    key={index}
                    classes={"ml-5"}
                    text={grade?.toString() + comma}
                    color={"#fff"}
                    size={"14px"}
                  />
                );
              })
            ) : <Label classes={"ml-5"} text={"N/A"} color={"#fff"} size={"14px"} />
          ) : (
            <Label classes={"ml-5"} text={"N/A"} color={"#fff"} size={"14px"} />
          )}
        </div>
        <div className="col-sm-6 d-flex justify-content-start mt-5">
          <Label
            classes={"me-3"}
            text={"Attendance:"}
            color={"#fff"}
            size={"14px"}
          />
          {studentById?.attendance?.length ? (
            studentById?.attendance?.toString() != 0 ? (
              studentById?.attendance?.map((attend, index) => {
                const comma =
                  index == studentById?.courses?.length - 1 ? "" : ",";
                return (
                  <Label
                    key={index}
                    classes={"ml-5"}
                    text={attend?.toString() + '%' + comma}
                    color={"#fff"}
                    size={"14px"}
                  />
                );
              })
            ) : <Label classes={"ml-5"} text={"N/A"} color={"#fff"} size={"14px"} />
          ) : (
            <Label classes={"ml-5"} text={"N/A"} color={"#fff"} size={"14px"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default student;
