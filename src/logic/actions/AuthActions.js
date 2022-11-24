import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_ALERT,
  WARNING,
  ERROR,
  SUCCESS,
} from "../constants/Constants";
import AuthService from "../services/AuthService";

import { addUserDetails } from "./UserAction";
import { setAlert } from "./AlertActions";

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token_id: response.data.token_id },
      });

      addUserDetails(response.data.user);

      window.location.reload();
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch(setAlert({ message: message, type: ERROR }));

      return Promise.reject();
    }
  );
};

export const logout = (navigate) => (dispatch) => {
  AuthService.logout(navigate);

  dispatch({
    type: LOGOUT,
  });
};

export const register = (age, email, name, password) => (dispatch) => {
  return AuthService.register(age, email, name, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch(setAlert({ message: response.statusText, type: SUCCESS }));

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch(setAlert({ message: message, type: ERROR }));

      return Promise.reject();
    }
  );
};
