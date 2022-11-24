import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/Constants";

const token_id = JSON.parse(localStorage.getItem("token"));

const initialState = token_id
  ? { isLoggedIn: true, token_id }
  : { isLoggedIn: false, token_id: null };

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token_id: payload.token_id,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token_id: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token_id: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
