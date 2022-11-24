import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { getDataToLocalStorage } from "../../handlers/local-storage/LocalStorageHandlers";

//Pages
import HomePage from "../HomePage.jsx";
import LoginPage from "../LoginPage.jsx";
import NotFoundPage from "../NotFoundPage.jsx";
import ProfilePage from "../ProfilePage.jsx";
import RegisterPage from "../RegisterPage.jsx";

//Alert
import Alert from "../../components/Alert/Alert";
import Menu from "../../components/Menu/Menu";

import { clearMessage } from "../../../logic/actions/AlertActions";
import { addUserDetails } from "../../../logic/actions/UserAction";
import { getUserDetails } from "../../../logic/services/UserService";
import { getUserProfileImage } from "../../../logic/services/AvatarService";
import { addUserProfileImage } from "../../../logic/actions/AvatarAction";
import { getTaskDetails } from "../../../logic/services/TaskService";
import { getTasks } from "../../../logic/actions/TaskAction";

const tokenID = getDataToLocalStorage();

const AppRouter = () => {
  const alert = useSelector((state) => state.alert);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.message !== null) {
      setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
    }
  }, [alert]);

  useEffect(() => {
    if (isLoggedIn !== false) {
      getUserDetails().then((response) => {
        console.log(response.data);
        dispatch(addUserDetails(response.data));

        getUserProfileImage(response.data._id)
          .then((response) => {
            dispatch(addUserProfileImage(JSON.stringify(response.data)));
          })

          .catch((err) => {
            dispatch(addUserProfileImage(""));
          });

        getTaskDetails()
          .then((response) => {
            dispatch(getTasks(response.data.data));
          })
          .catch((error) => {
            console.error(error);

            dispatch(getTasks([]));
          });
      });
    }
  }, [isLoggedIn]);

  return (
    <>
      {alert.message !== null && (
        <Alert message={alert.message} type={alert.type} />
      )}

      <BrowserRouter>
        {tokenID !== null && <Menu />}
        <Routes>
          <Route
            path="/"
            element={tokenID === null ? <LoginPage /> : <HomePage />}
          />
          <Route
            path="/profile"
            element={tokenID !== null && <ProfilePage />}
          />
          <Route
            path="/signup"
            element={tokenID === null && <RegisterPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
