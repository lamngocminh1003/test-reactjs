import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../components/Services/UserService";
const TableUsers = (props) => {
  useEffect(() => {
    //call api
    getAllUsers();
  }, []);
  const [listUsers, setListUser] = useState([]);
  const getAllUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data && res.data.data) {
      setListUser(res.data.data);
    } else {
      setListUser([]);
    }
  };
  return (
    <div>
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
    </div>
  );
};
export default TableUsers;
