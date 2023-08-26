import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import _ from "lodash";

import { createNewUser } from "./Services/UserService";
const ModalAddNewUser = (props) => {
  const [show, setShow] = useState(false);
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  let { handleUpdateTable } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnClickAdd = async () => {
    if (!name && !job) {
      toast.error("Invalid name & job!");
      return;
    }
    if (!name) {
      toast.error("Invalid name!");
      return;
    }
    if (!job) {
      toast.error("Invalid job!");
      return;
    }

    let res = await createNewUser(name, job);
    if (res && res.id) {
      //success
      setShow(false);
      setName("");
      setJob("");
      toast.success("Add new user successfully");
      handleUpdateTable({ first_name: name, id: res.id });
    }
  };

  return (
    <>
      <Button variant="primary" className="mb-3" onClick={handleShow}>
        <span>
          <i className="fa-solid fa-user-plus me-2"></i>
        </span>
        Add new
      </Button>

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 text-uppercase text-primary">
            Add new user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Job
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your job"
              value={job}
              onChange={(event) => {
                setJob(event.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleOnClickAdd()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAddNewUser;
