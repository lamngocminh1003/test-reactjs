import axios from "./Customize-axios";
const fetchAllUser = (page) => {
  return axios.get(`/users?page=${page}`);
};
export { fetchAllUser };
