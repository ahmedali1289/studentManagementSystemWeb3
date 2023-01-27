import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputFeilds from "../components/InputFeilds";
import checkForEmptyState from "../context/helperFunctions";
import { StudentsContext } from "../context/StudentsApp";
import { useForm } from "react-hook-form";
function AddStudent() {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [age, setAge] = useState(null);
  const [number, setNumber] = useState(null);
  const router = useRouter()
  
  const { addStudent, currentAccount, studentsList, studentAdd } = useContext(StudentsContext);
  useEffect(() => {
    setName('')
    setAddress('')
    setAge('')
    setNumber('')
    if(studentAdd){
      router.back()
    }
  }, [studentsList, studentAdd]);

  const addStudentFunc = () => {
    if(currentAccount){
      if(name&&address&&age&&number){
        const data = {name:name,studentaddress:address, age:age, number:number}
        addStudent(data)
      }
      else{
        checkForEmptyState([{name:"name",value:name},{name:"address",value:address},{name:"age",value:age},{name:"number",value:number}])
      }
    }
    else{
      alert("connect your wallet account")
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-3 mb-3">
          <Heading
            heading={"Add Student"}
            color={"white"}
            size={null}
            alignment={"center"}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <InputFeilds
            label={"Name"}
            labelColor={"white"}
            placeholder={null}
            labelFontSize={"10px"}
            setState={setName}
            state={name}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <InputFeilds
            label={"Address"}
            labelColor={"white"}
            placeholder={null}
            labelFontSize={"10px"}
            setState={setAddress}
            state={address}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <InputFeilds
            label={"Age"}
            labelColor={"white"}
            placeholder={null}
            labelFontSize={"10px"}
            setState={setAge}
            state={age}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <InputFeilds
            label={"Number"}
            labelColor={"white"}
            placeholder={null}
            labelFontSize={"10px"}
            setState={setNumber}
            state={number}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3 d-flex justify-content-center">
          <Button text={"Add"} onclick={addStudentFunc} />
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
