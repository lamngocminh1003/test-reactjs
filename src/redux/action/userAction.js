import { loginAPI } from "../../../src/components/Services/UserService";
import { toast } from "react-toastify";

export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REFRESH = "USER_REFRESH";

export const handleLoginRedux = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_LOGIN });
    let res = await loginAPI(email.replace(), password);
    if (res && res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("email", email.trim());
      dispatch({
        type: FETCH_USER_SUCCESS,
        data: { email: email.trim(), token: res.token },
      });
      toast.success("Login successfully!");
    } else {
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
      dispatch({ type: FETCH_USER_ERROR });
    }
  };
};
export const handleLogoutRedux = () => {
  return (dispatch, getState) => {
    dispatch({ type: USER_LOGOUT });
    toast.success("Logout successfully!");
  };
};
export const handleRefresh = () => {
  return (dispatch, getState) => {
    dispatch({ type: USER_REFRESH });
  };
};
