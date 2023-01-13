import React, { useEffect, useState } from "react";
import Web3Modal from "web3Modal";
import { ethers } from "ethers";
import { toDoListAddress, toDoListABI } from "./constants";
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(toDoListAddress, toDoListABI, signerOrProvider);
export const ToDoListContext = React.createContext();
export const ToDoListProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [error, setError] = useState('');
    const [allToDoList, setAllToDoList] = useState([]);
    const [myList, setMyList] = useState([]);
    const [allAddress, setAllAddress] = useState([]);
    // conntecting metamask
    const checkIfWalletConnect = async()=>{
        if(!window.ethereum) return setError('Please install metamask');
        const account = await window.ethereum.request({method:"eth_accounts"})
        if(account.length){
            setCurrentAccount(account[0])
        }
        else{
            setError("please Install metamask & connect, reload")
        }
    }
    useEffect(() => {
        checkIfWalletConnect(); 
    }, [])
    
  return (
    <ToDoListContext.Provider value={{}}>{children}</ToDoListContext.Provider>
  );
};

const ToDoListApp = () => {
  return <div>ToDoListApp</div>;
};

export default ToDoListApp;
