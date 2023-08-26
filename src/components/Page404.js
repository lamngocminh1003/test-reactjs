import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page500.scss";
const Page404 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Oh snap!!! The page you are looking for is not found.
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
export default Page404;
