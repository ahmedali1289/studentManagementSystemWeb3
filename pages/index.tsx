import React, { useEffect, useContext, useState } from "react";
import { MdVerified } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { ToDoListContext } from "../context/ToDoListApp";
import Image from "next/image";
import Style from "../styles/index.module.css";
// import Loading from "../loading.gif";
import Data from "../component/Data";
const Home = () => {
  const [message, setMessage] = useState("");
  const {
    checkIfWalletConnect,
    toDoList,
    getToDoList,
    change,
    currentAccount,
    error,
    allToDoList,
    allAddress,
    myList,
  } = useContext(ToDoListContext);
  useEffect(() => {
    // checkIfWalletConnect();
  }, []);

  return (
    <>
      {
        <>
          {!currentAccount ? (
            <button onClick={() => checkIfWalletConnect()}>
              Connect Wallet
            </button>
          ) : (
            <button onClick={() => getToDoList()}>
              {currentAccount.slice(0, 20)}...
            </button>
          )}
          {myList?.length ? (
            myList?.map((e: any, i:any) => {
              return (
                <>
                  <p>{e.name}</p>
                  {!e?.completed ?
                  <button onClick={() => {change(i)}}>cahnge</button>
                  : <button>Completed</button>
                  }
                </>
              );
            })
          ) : (
            <p>No transactions found</p>
          )}
          <input
            type="Text"
            placeholder="Enter your todo"
            onChange={(e: any) => setMessage(e.target.value)}
          />
          {!currentAccount ? (
            <button onClick={() => checkIfWalletConnect()}>
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={() => {
                toDoList(message)
              }}
            >
              Add Todo
            </button>
          )}
          {/* <Data allToDoList={allToDoList} allAddress={allAddress} myList={myList}/> */}
        </>
      }
    </>
  );
};

export default Home;
