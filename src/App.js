import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useContext } from "react";
import AppRoutes from "./components/routes/AppRoutes";
import { useSelector, useDispatch } from "react-redux";
import { handleLoginRedux, handleRefresh } from "./redux/action/userAction";
function App() {
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    if (token && email) {
      dispatch(handleRefresh());
    }
  }, []);
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
