import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";
function ModalComponent({
  showModal,
  setShowModal,
  id,
  heading,
  body,
  courses,
  modalFunction,
  modalType,
  marks,
  attendance,
  fees,
  courseNames
}) {
  function saveCourse() {
    const data = { id: id, course: courses.value };
    setShowModal(false);
    modalFunction(data);
  }
  function saveGrades() {
    const data = { id: id,  grade:marks, courseIndex: courses};
    setShowModal(false);
    modalFunction(data);
  }
  function saveAttendance() {
    const data = { id: id,  attendance:attendance, courseIndex: courses};
    setShowModal(false);
    modalFunction(data);
  }
  function addCourse() {
    const data = { courseName:courseNames, courseFee: fees};
    setShowModal(false);
    modalFunction(data);
  }
  function cancel() {
    setShowModal(false);
  }
  return (
    <>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title style={{ color: "#fff" }}>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button text={"Cancel"} onclick={cancel} />
          <Button text={"Save"} onclick={modalType == 'course' ? saveCourse : modalType == 'addCourse' ? addCourse : modalType == 'editCourse' ? addCourse : modalType == 'grades' ? saveGrades : saveAttendance} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
