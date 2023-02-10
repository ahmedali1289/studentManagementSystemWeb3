import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import InputFeilds from "../../components/InputFeilds";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import checkForEmptyState from "../../context/helperFunctions";
function AddStudent() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter();
  const { addStudent, currentAccount, studentsList, studentAdd } =
    useContext(AppContext);
  useEffect(() => {
    setName("");
    setAddress("");
    setAge("");
    setNumber("");
    if (studentAdd) {
      router.back();
    }
  }, [studentsList, studentAdd]);
  const handleSignUp = async () => {
    const email = "ahmed@gmail.com";
    const password = "password";
    axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const addStudentFunc = () => {
    handleSignUp();
    if (currentAccount) {
      if (name && address && age && number) {
        const data = {
          name: name,
          studentaddress: address,
          age: age,
          number: number,
        };
        // addStudent(data);
      } else {
        checkForEmptyState([
          { name: "name", value: name },
          { name: "address", value: address },
          { name: "age", value: age },
          { name: "number", value: number },
        ]);
      }
    } else {
      alert("connect your wallet account");
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
            containerWidth={"w-50"}
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
            containerWidth={"w-50"}
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
            containerWidth={"w-50"}
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
            containerWidth={"w-50"}
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
