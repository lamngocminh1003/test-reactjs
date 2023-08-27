import React, { useState, useEffect } from "react";
import "./Page500.scss";
const PageError = () => {
  return (
    <div>
      <div className="section">
        <h1 className="error">
          <i class="fa-solid fa-circle-exclamation"></i>
        </h1>
        <div className="page">Oh snap!!! Something went wrong.</div>
      </div>
    </div>
  );
};
export default PageError;
