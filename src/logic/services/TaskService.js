import axios from "../axios/CustomCall";
import { API_URL } from "../constants/Constants";

export const updateTaskDetails = (name, email, age) => {
  return axios.put(`${API_URL}/task`, {
    name,
    email,
    age,
  });
};

export const getTaskDetails = () => {
  return axios.get(`${API_URL}/task`);
};

export default updateUserDetails;
