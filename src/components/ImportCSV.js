import { CSVLink, CSVDownload } from "react-csv";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { toast } from "react-toastify";

const ImportCSV = (props) => {
  const { setListUser } = props;
  const handleImportCsv = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (file.type !== "text/csv") {
        toast.error("Only accept text/csv file!");
        return;
      }
      Papa.parse(file, {
        // header: true,
        complete: (result) => {
          let rawCSV = result.data;
          if (rawCSV.length > 0) {
            if (rawCSV[0] && rawCSV[0].length === 3) {
              if (
                rawCSV[0][0] !== "email" ||
                rawCSV[0][1] !== "first_name" ||
                rawCSV[0][2] !== "last_name"
              ) {
                toast.error("Wrong format header CSV file !");
              } else {
                let results = [];
                rawCSV.map((item, index) => {
                  if (index > 0 && item.length === 3) {
                    let obj = {};
                    obj.email = item[0];
                    obj.first_name = item[1];
                    obj.last_name = item[2];
                    results.push(obj);
                  }
                });
                setListUser(results);
                toast.success("Import CSV file successfully !");
              }
            } else {
              toast.error("Wrong format CSV file !");
            }
          } else {
            toast.error("Not found data on CSV file !");
          }
        },
      });
    }
    console.log(event.target.files[0]);
  };
  return (
    <>
      <label
        className="btn btn-primary btn-import"
        htmlFor="file"
        type="button"
      >
        <span>
          <i className="fa-solid fa-file-import me-2"></i>
        </span>
        Import
      </label>
      <input
        type="file"
        id="file"
        hidden
        onChange={(event) => {
          handleImportCsv(event);
        }}
      />
    </>
  );
};
export default ImportCSV;
