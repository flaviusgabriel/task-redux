import axios from "../axios/CustomCall";
import { API_URL } from "../constants/Constants";

const login = (email, password) => {
  return axios
    .post(`${API_URL}/user/login`, {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response;
    });
};

const logout = (navigate) => {
  navigate("/");

  localStorage.removeItem("token");

  window.location.reload();
};

const register = (age, email, name, password) => {
  return axios.post(`${API_URL}/user/register`, {
    name,
    email,
    password,
    age,
  });
};

export default {
  login,
  logout,
  register,
};
