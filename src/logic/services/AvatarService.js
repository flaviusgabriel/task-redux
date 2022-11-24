import axios from "../axios/CustomCall";

///const fs = require("fs");
const FormData = require("form-data");

export const getUserProfileImage = (userId) => {
  return axios.get(`/user/${userId}/avatar`);
};

export const addUserProfileImage = (image) => {
  const data = new FormData();

  data.append("avatar", image.files[0]);

  return axios.post(`/user/me/avatar`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const deleteUserProfileImage = () => {
  return axios.delete(`/user/me/avatar`);
};

/// cand eram tanar fecior tare bine mai era !!
