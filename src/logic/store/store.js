import { combineReducers, configureStore } from "@reduxjs/toolkit";

import UserReducer from "../reducers/UserReducer";
import AlertReducer from "../reducers/AlertReducer";
import AuthReducer from "../reducers/AuthReducer";
import AvatarReducer from "../reducers/AvatarReducer";

const rootReducer = combineReducers({
  login: AuthReducer,
  user: UserReducer,
  avatar: AvatarReducer,
  alert: AlertReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
