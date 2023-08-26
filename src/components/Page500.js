import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page500.scss";
const Page500 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="section">
        <h1 className="error">500</h1>
        <div className="page">
          Oh snap!!! You don't have permission to access this route.
        </div>
        <div>
          <a className="back-home" onClick={() => handleBack()}>
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
};
export default Page500;
