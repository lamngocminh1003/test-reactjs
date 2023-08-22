import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../components/Services/UserService";
import ReactPaginate from "react-paginate";
import Paginate from "./Paginate";
import { Modal } from "bootstrap";
import ModalAddNewUser from "./ModalAddNewUser";

const TableUsers = (props) => {
  useEffect(() => {
    //call api
    getAllUsers(1);
  }, []);
  const [listUsers, setListUser] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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

  return (
    <div>
      <div className="mt-5 pt-3 title">Manage users</div>
      <ModalAddNewUser />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
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
