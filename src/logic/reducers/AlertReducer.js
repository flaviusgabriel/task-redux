import { SET_ALERT, CLEAR_ALERT } from "../constants/Constants";

// type WARNING , SUCCESS , ERROR
const initialState = { message: null, type: null };

const AlertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return { message: payload.message, type: payload.type };

    case CLEAR_ALERT:
      return { message: null, type: null };

    default:
      return state;
  }
};

export default AlertReducer;
