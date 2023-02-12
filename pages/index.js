import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Router from "next/router";
import Heading from "../components/Heading";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="box">
              <Heading
                heading={"Total Students"}
                color={"white"}
                size={null}
                alignment={"center"}
              />
              <Heading
                heading={"98 Students"}
                color={"white"}
                size={'1.5rem'}
                alignment={"center"}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="box">
              <Heading
                heading={"Total Teachers"}
                color={"white"}
                size={null}
                alignment={"center"}
              />
              <Heading
                heading={"10 Teachers"}
                color={"white"}
                size={'1.5rem'}
                alignment={"center"}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="box">
              <Heading
                heading={"Courses provided"}
                color={"white"}
                size={null}
                alignment={"center"}
              />
              <Heading
                heading={"100+ Courses"}
                color={"white"}
                size={'1.5rem'}
                alignment={"center"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
