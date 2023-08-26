import React, { useState, useEffect, useContext } from "react";
import { loginAPI } from "./Services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const { loginContext } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      toast.error("Invalid email!");
    }
    if (!password) {
      toast.error("Invalid password!");
    }
    if (!email && !password) {
      toast.error("Invalid email & password!");
    }
    setIsShowLoading(true);
    let res = await loginAPI(email, password);
    if (res && res.token) {
      loginContext(email, res.token);
      toast.success("Login successfully!");
      navigate("/");
    } else {
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setIsShowLoading(false);
  };
  return (
    <div className="mt-5 pt-5 login-container ">
      <div className="border border-info p-4 rounded login-form">
        <div className="title">Login</div>
        <div className="mb-3">
          <label className="form-label">Email or username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-password">
            <input
              type={isShowPassword === true ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <i
              className={
                isShowPassword === true
                  ? "fa-regular fa-eye "
                  : "fa-regular fa-eye-slash"
              }
              onClick={() => setIsShowPassword(!isShowPassword)}
            ></i>
          </div>
        </div>
        {isShowLoading && (
          <div className="fa-2x d-flex justify-content-center m-3 text-info">
            {" "}
            <i className="fas fa-spinner fa-pulse "></i>
          </div>
        )}

        <div>
          <button
            className={
              email && password ? "btn btn-login active" : "btn btn-login"
            }
            disabled={email && password ? false : true}
            onClick={() => handleLogin()}
          >
            Log in
          </button>
        </div>
        <div className="back-home mt-4">
          <span>
            {" "}
            <i className="fa-solid fa-angle-left me-1"></i>{" "}
            <span className="back-text" onClick={() => handleBack()}>
              Go back
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
