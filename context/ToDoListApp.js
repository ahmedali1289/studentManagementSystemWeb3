import React, { useState, useEffect } from "react";
import Web3Modal from "web3Modal";
import { ethers } from "ethers";
import { toDoListAddress, toDoListABI } from "./constants";
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(toDoListAddress, toDoListABI, signerOrProvider);
export const ToDoListContext = React.createContext();
export const ToDoListProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contracts, setContract] = useState("");
  const [error, setError] = useState("");
  const [allToDoList, setAllToDoList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [allAddress, setAllAddress] = useState([]);
  // conntecting metamask
  const checkIfWalletConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        getToDoList()
        console.log(accounts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getToDoList = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);
      const getAllAddress = await contract.getTasks();
      setMyList(getAllAddress)
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      setError("Something went wrong", error);
    }
  };
  
  const toDoList = async (message) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);
      const createList = await contract.addTask(message);
      createList.wait();
      getToDoList()
    } catch (error) {
      console.log(error);
      setError("Something went wrong", error);
    }
  };
  const change = async (address) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);
      const state = await contract.completeTask(address);
      state.wait();
      getToDoList()
      console.log(state);
    } catch (error) {
      setError("Something went wrong", error);
    }
  };
  return (
    <ToDoListContext.Provider
      value={{
        checkIfWalletConnect,
        toDoList,
        getToDoList,
        change,
        currentAccount,
        myList,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

const ToDoListApp = () => {
  return <div>ToDoListApp</div>;
};

export default ToDoListApp;
