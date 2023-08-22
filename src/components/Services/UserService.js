import axios from "./Customize-axios";
const fetchAllUser = (page) => {
  return axios.get(`/users?page=${page}`);
};
const createNewUser = (name, job) => {
  return axios.post(`/users`, { name, job });
};
export { fetchAllUser, createNewUser };
