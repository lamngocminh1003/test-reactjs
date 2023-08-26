import { Route, Routes, Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Page500 from "../Page500";
const PrivateRoutes = (props) => {
  const { user } = useContext(UserContext);
  if (user && !user.auth) {
    return (
      <>
        <Page500 />
      </>
    );
  }
  return <>{props.children}</>;
};
export default PrivateRoutes;
