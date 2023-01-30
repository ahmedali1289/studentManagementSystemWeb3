import React, { useState, useEffect } from "react";
import Web3Modal from "web3Modal";
import { ethers } from "ethers";
import { studentAddress, studentABI } from "./constants";
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(studentAddress, studentABI, signerOrProvider);
export const StudentsContext = React.createContext();
export const StudentsProvider = ({ children }) => {
  const [studentAdd, setStudentAdd] = useState(false)
  const [studentsList, setStudentsList] = useState([])
  const [currentAccount, setCurrentAccount] = useState("");
  const [studentById, setStudentById] = useState(null);
  useEffect(() => {
    getStudents()
  }, [studentAdd])
  useEffect(() => {
    connectWallet()
  }, [currentAccount])
  
  // conntecting metamask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if(accounts){
          setCurrentAccount(accounts[0]);
          getStudents()
        }
        else{
          console.log("connect metamask Account")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const addStudent = async (data) => {
    console.log(data,"add");
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);
      const createList = await contract.addStudent(data.name,data.studentaddress, data.age, data.number)
      createList.wait();
      if(createList){
        setStudentAdd(true)
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const getStudents = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);
      const getAllAddress = await contract.getAllStudents()
      setStudentAdd(false)
      setStudentsList(getAllAddress)
    } catch (error) {
      console.log(error,"errors");
    }
  };
  const getStudent = async (id) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);
      const student = await contract.getStudent(id)
      setStudentById(student)
    } catch (error) {
      console.log(error,"errors");
    }
  };
  return (
    <StudentsContext.Provider
      value={{
        connectWallet,
        addStudent,
        currentAccount,
        studentsList,
        studentAdd,
        getStudent,
        studentById
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

const ToDoListApp = () => {
  return <div>ToDoListApp</div>;
};

export default ToDoListApp;
