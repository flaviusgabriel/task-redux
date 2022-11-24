import {
  ADD_USER_DETAILS,
  REMOVE_USER_DETAILS,
  UPDATE_USER_DETAILS,
} from "../constants/Constants";

export const addUserDetails = (payload) => {
  return { type: ADD_USER_DETAILS, payload };
};

export const removeUserDetails = () => {
  return { type: REMOVE_USER_DETAILS, payload: {} };
};

export const updateUserDetails = (payload) => {
  return { type: UPDATE_USER_DETAILS, payload };
};
