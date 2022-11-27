import {
  ADD_USER_PROFILE_IMAGE,
  REMOVE_USER_PROFILE_IMAGE,
} from "../constants/Constants";

const initialState = false;

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_USER_PROFILE_IMAGE:
      return payload;
    case REMOVE_USER_PROFILE_IMAGE:
      return payload;
    default:
      return state;
  }
}
