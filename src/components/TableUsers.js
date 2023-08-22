import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../components/Services/UserService";
import Paginate from "./Paginate";
import ModalAddNewUser from "./ModalAddNewUser";
import ModalEditUser from "./ModalEditUser";
import ModalDeleteUser from "./ModalDeleteUser";
import _ from "lodash";

const TableUsers = (props) => {
  useEffect(() => {
    //call api
    getAllUsers(1);
  }, []);
  const [listUsers, setListUser] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dataUsers, setDataUser] = useState({});

  const getAllUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setListUser(res.data);
      setTotalUsers(res.total);
      setTotalPages(res.total_pages);
    } else {
      setListUser([]);
    }
  };
  const handleUpdateTable = (user) => {
    setListUser([user, ...listUsers]);
  };
  const handleEditTable = (user) => {
    let index = listUsers.findIndex((item) => item.id === user.id);
    let listUsersCopy = _.cloneDeep(listUsers);
    listUsersCopy[index].first_name = user.first_name;
    setListUser(listUsersCopy);
  };

  const handleEditUser = (user) => {
    setShowEdit(true);
    setDataUser(user);
  };
  const handleDeleteUser = (user) => {
    setShowDelete(true);
    setDataUser(user);
  };
  return (
    <div>
      <div className="mt-5 pt-3 title">Manage users</div>
      <ModalAddNewUser handleUpdateTable={handleUpdateTable} />
      <ModalEditUser
        setShowEdit={setShowEdit}
        showEdit={showEdit}
        dataUsers={dataUsers}
        handleEditTable={handleEditTable}
      />
      <ModalDeleteUser
        setShowDelete={setShowDelete}
        showDelete={showDelete}
        dataUsers={dataUsers}
      />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td className="d-flex justify-content-evenly gap-3 ">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEditUser(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Paginate totalPages={totalPages} getAllUsers={getAllUsers} />
    </div>
  );
};
export default TableUsers;
