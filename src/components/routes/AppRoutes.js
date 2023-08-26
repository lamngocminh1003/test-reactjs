import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import TableUsers from "../TableUsers";
import Page404 from "../Page404";
import { UserContext } from "../../context/UserContext";
import React, { useContext } from "react";
import PrivateRoutes from "./PrivateRoutes";
const AppRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <PrivateRoutes>
              <TableUsers />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
