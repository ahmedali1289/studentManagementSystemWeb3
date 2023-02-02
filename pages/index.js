import React, { useEffect, useContext, useState } from "react";
import { StudentsContext } from "../context/StudentsApp";
import Navbar from "../components/Navbar";
import StudentsTable from "../components/Table";
const Home = () => {
  const [data, setData] = useState("");
  const { connectWallet, addStudent, currentAccount, studentsList } =
    useContext(StudentsContext);
  useEffect(() => {
  }, [studentsList]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>No data yet</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
