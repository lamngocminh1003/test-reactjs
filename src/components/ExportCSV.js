import { CSVLink, CSVDownload } from "react-csv";
import React, { useState, useEffect } from "react";
const ExportCSV = (props) => {
  const { listUsers } = props;
  const [dataExport, setDataExport] = useState([]);
  const getAllUsersExport = (event, done) => {
    let result = [];
    if (listUsers && listUsers.length > 0) {
      result.push(["Id", "Email", "First name", "Last name"]);
      listUsers.map((item, index) => {
        let arr = [];
        arr[0] = item.id;
        arr[1] = item.email;
        arr[2] = item.first_name;
        arr[3] = item.last_name;
        result.push(arr);
      });
      setDataExport(result);
      done();
    }
  };
  return (
    <div>
      <CSVLink
        data={dataExport}
        className="btn btn-primary"
        filename={"ListUsers.csv"}
        asyncOnClick={true}
        onClick={(event, done) => getAllUsersExport(event, done)}
      >
        <span className="me-1">
          <i className="fa-solid fa-download"></i>{" "}
        </span>
        Export
      </CSVLink>
    </div>
  );
};
export default ExportCSV;
