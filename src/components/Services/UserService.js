import axios from "./Customize-axios";
const fetchAllUser = () => {
  return axios.get("/users?page=1");
};
export { fetchAllUser };
