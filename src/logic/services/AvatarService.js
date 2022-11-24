import axios from "../axios/CustomCall";

export const getUserProfileImage = (userId) => {
  return axios.get(`/user/${userId}/avatar`);
};

export const addUserProfileImage = (image) => {
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   "Authorization",
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdjZmNiODEwODZiMzAwMTcyMDYwNzUiLCJpYXQiOjE2NjkxMzkwNzN9.DZbAvSpuc_EPQcGm9sbYQ49CBNRSxPX7x6NJUVYkySE"
  // );
  // var formdata = new FormData();
  // formdata.append("avatar", image.files[0], "blog-header.jpg");
  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: formdata,
  //   redirect: "follow",
  // };
  // fetch(
  //   "https://api-nodejs-todolist.herokuapp.com/user/me/avatar",
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
  ///--------------
  const bodyFormData = new FormData();
  bodyFormData.append("avatar", image.files[0], "blog-header.jpg");
  return axios.post(`/user/me/avatar`, {
    avatar: new Blob([bodyFormData], { type: "application/octet-binary" }),
  });

  // var axios = require("axios");
  // var FormData = require("form-data");
  // var fs = require("fs");
  // var data = new FormData();
  // data.append(
  //   "avatar",
  //   fs.createReadStream(
  //     "/home/ali/Mine/c/nodejs-blog/public/img/blog-header.jpg"
  //   )
  // );
  // var config = {
  //   method: "post",
  //   url: "https://api-nodejs-todolist.herokuapp.com/user/me/avatar",
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY",
  //     ...data.getHeaders(),
  //   },
  //   data: data,
  // };
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

export const deleteUserProfileImage = () => {
  return axios.delete(`/user/me/avatar`);
};
