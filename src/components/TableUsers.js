import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../components/Services/UserService";
import ReactPaginate from "react-paginate";

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
  const handlePageClick = (event) => {
    getAllUsers(+event.selected + 1);
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
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};
export default TableUsers;
