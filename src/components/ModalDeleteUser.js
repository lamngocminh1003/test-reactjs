import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import _ from "lodash";
import { createNewUser } from "./Services/UserService";
const ModalDeleteUser = (props) => {
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  let { handleUpdateTable, setShowDelete, showDelete } = props;
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);
  const handleOnClickEdit = async () => {
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
      setShowDelete(false);
      setName("");
      setJob("");
      toast.success("Add new user successfully");
      handleUpdateTable({ first_name: name, id: res.id });
    }
  };

  return (
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 text-uppercase text-primary">
            Delete user
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
          <Button variant="primary" onClick={() => handleOnClickEdit()}>
            Conform
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteUser;
