import React, { useContext } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Table from '../../components/Table'
import Heading from "../../components/Heading";
import { StudentsContext } from "../../context/StudentsApp";
function Students() {
  const { studentsList } = useContext(StudentsContext);
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
          <Table list={studentsList}/>
        </div>
      </div>
    </div>
  );
}

export default Students;
