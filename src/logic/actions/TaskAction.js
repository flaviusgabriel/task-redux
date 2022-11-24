import {
  GET_ALL_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../constants/Constants";

export const getTasks = (payload) => {
  return { type: GET_ALL_TASKS, payload };
};

export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};

export const updateTask = (payload) => {
  return { type: UPDATE_TASK, payload };
};

export const deleteTask = (payload) => {
  return { type: DELETE_TASK, payload };
};
