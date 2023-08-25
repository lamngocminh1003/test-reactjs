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
const deleteUser = (id) => {
  return axios.delete(`/users/${id}`, { id });
};
const loginAPI = (email, password) => {
  return axios.post(`/login`, { email, password });
};
export { fetchAllUser, createNewUser, updateUser, deleteUser, loginAPI };
