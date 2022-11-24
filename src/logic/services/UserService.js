import axios from "./../axios/CustomCall";
import { API_URL } from "../constants/Constants";

export const updateUserDetails = (name, email, age) => {
  return axios.put(`${API_URL}/user/me`, {
    name,
    email,
    age,
  });
};

export const getUserDetails = () => {
  return axios.get(`${API_URL}/user/me`);
};

export default updateUserDetails;
