import React, { useState, useEffect } from "react";
import _ from "lodash";
import { debounce } from "lodash";

const SearchByEmail = (props) => {
  const [keyword, setKeyword] = useState("");
  const { getAllUsers, listUsers, setListUser } = props;
  const handleSearch = debounce((event) => {
    let term = event;
    console.log(term);
    if (term) {
      let listUsersCopy = _.cloneDeep(listUsers);
      listUsersCopy = listUsersCopy.filter((item) => item.email.includes(term));
      setListUser(listUsersCopy);
    } else {
      getAllUsers(1);
    }
  }, 500);
  return (
    <div className="col-md-5">
      {" "}
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Search user's email
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
        />
        <span className="input-group-text">
          <button className="btn btn-info text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </span>
      </div>
    </div>
  );
};
export default SearchByEmail;
