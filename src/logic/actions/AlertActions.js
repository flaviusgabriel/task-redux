import { SET_ALERT, CLEAR_ALERT } from "../constants/Constants";

export const setAlert = (value) => ({
  type: SET_ALERT,
  payload: { message: value.message, type: value.type },
});

export const clearMessage = () => ({
  type: CLEAR_ALERT,
});
