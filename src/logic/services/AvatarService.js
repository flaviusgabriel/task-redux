import axios from "../axios/CustomCall";

///const fs = require("fs");
const FormData = require("form-data");

export const getUserProfileImage = (userId) => {
  return axios.get(`/user/${userId}/avatar`, { responseType: "arraybuffer" });
};

export const addUserProfileImage = (image) => {
  const data = new FormData();

  // console.log(image.files[0]);

  // for (const item in image.files[0]) {
  //   data.append(item, image.files[0][item]);
  // }

  data.append("avatar", image.files[0]);

  return axios.post(`/user/me/avatar`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteUserProfileImage = () => {
  return axios.delete(`/user/me/avatar`);
};
