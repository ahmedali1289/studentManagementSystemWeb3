import React, { useEffect, useContext, useState } from "react";
import { StudentsContext } from "../context/StudentsApp";
import Navbar from "../components/Navbar";
const Home = () => {
  const [data, setData] = useState("");
  const { connectWallet, addStudent, currentAccount, studentsList } =
    useContext(StudentsContext);
  useEffect(() => {
    console.log("Updated State", studentsList);
  }, [studentsList]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Navbar />
            {
              <>
                {!currentAccount ? (
                  <>
                    <p>Connect your wallet</p>
                    <button onClick={() => connectWallet()}>
                      Connect Wallet
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      Your connected account {currentAccount.slice(0, 15)}...
                    </p>
                    <input
                      type="Text"
                      placeholder="Enter student name"
                      onChange={(e) => setData(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        addStudent(data);
                      }}
                    >
                      Add Student
                    </button>
                    <h3>Students List</h3>
                    {studentsList.length ? (
                      <>
                        {studentsList?.map((e, i) => {
                          return (
                            <>
                              <p
                                style={{ textTransform: "capitalize" }}
                                key={i}
                              >
                                Name: {e?.name}
                              </p>
                              {e?.courses?.length ? (
                                e?.courses?.map((c) => {
                                  <p key={i + 1}>{c?.name}</p>;
                                })
                              ) : (
                                <p key={i + 2}>
                                  No courses assigned to{" "}
                                  <span style={{ textTransform: "capitalize" }}>
                                    {e?.name}
                                  </span>
                                </p>
                              )}
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <p>No Students yet</p>
                    )}
                  </>
                )}
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
