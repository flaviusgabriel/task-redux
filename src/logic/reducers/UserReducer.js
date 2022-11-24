import {
  ADD_USER_DETAILS,
  REMOVE_USER_DETAILS,
  UPDATE_USER_DETAILS,
} from "../constants/Constants";

const initialState = {};

const UserReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_USER_DETAILS:
      return payload;
    case REMOVE_USER_DETAILS:
      return payload;
    // case UPDATE_USER_DETAILS: {
    //   state, state.payload;
    // }
    default:
      return state;
  }
};

export default UserReducer;
