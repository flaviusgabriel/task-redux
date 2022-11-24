import axios from "../axios/CustomCall";

export const updateTaskDetails = (id, completed) => {
  return axios.put(`/task/${id}`, {
    completed: completed,
  });
};

export const addTaskDetail = (description) => {
  return axios.post(`/task`, {
    description: description,
  });
};

export const getTaskDetails = () => {
  return axios.get(`/task`);
};

export const deleteTaskDetails = (id) => {
  // id of task
  return axios.delete(`/task/${id}`);
};
