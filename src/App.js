import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./context/UserContext";
import React, { useEffect, useContext } from "react";
import AppRoutes from "./components/routes/AppRoutes";
function App() {
  const { loginContext } = useContext(UserContext);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    if (token && email) {
      loginContext(email, token);
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
