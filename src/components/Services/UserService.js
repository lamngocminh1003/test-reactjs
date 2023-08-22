import axios from "./Customize-axios";
const fetchAllUser = (page) => {
  return axios.get(`/users?page=${page}`);
};
const createNewUser = (name, job) => {
  return axios.post(`/users`, { name, job });
};
const updateUser = (name, job, id) => {
  return axios.put(`/users/${id}`, { name, job, id });
};
export { fetchAllUser, createNewUser, updateUser };
