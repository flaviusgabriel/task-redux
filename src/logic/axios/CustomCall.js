import axios from "axios";
import { API_URL } from "../constants/Constants";

const Axios = axios.create({
  baseURL: API_URL,
});

Axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
  localStorage.getItem("token")
)}`;

export default Axios;
