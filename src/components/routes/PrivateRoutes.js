import React, { useContext } from "react";
import Page500 from "../Page500";
import { useSelector } from "react-redux";

const PrivateRoutes = (props) => {
  const user = useSelector((state) => state.user.account);
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
