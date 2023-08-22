import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import _ from "lodash";
import { updateUser } from "./Services/UserService";
const ModalEditUser = (props) => {
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  let { handleEditTable, setShowEdit, showEdit, dataUsers } = props;
  console.log(dataUsers);
  const handleClose = () => setShowEdit(false);
  const handleShow = () => setShowEdit(true);
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

    let res = await updateUser(name, job, id);
    if (res && res.updatedAt) {
      //success
      setShowEdit(false);
      toast.success("Update user successfully");
      setName("");
      setJob("");
      handleEditTable({ first_name: name, id: dataUsers.id });
    }
  };
  useEffect(() => {
    if (showEdit) {
      setName(dataUsers.first_name);
      setId(dataUsers.id);
    }
  }, [dataUsers]);
  return (
    <>
      <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 text-uppercase text-primary">
            Edit user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control" value={id} hidden />
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Name
            </span>
            <input
              type="text"
              className="form-control"
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
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditUser;
