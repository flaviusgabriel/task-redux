import {
  GET_ALL_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../constants/Constants";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_ALL_TASKS:
      return payload.map((value) => {
        if (value.completed === true) {
          value.completed = "Completed";
        } else if (value.completed === false) {
          value.completed = "Not Completed";
        }

        return value;
      });
    case ADD_TASK:
      return [...state, { ...payload, completed: "Not Completed" }];
    case UPDATE_TASK:
      return [
        ...state.map((value) => {
          if (value._id === payload._id) {
            value = {
              ...value,
              ...payload,
              completed:
                payload.completed === true ? "Completed" : "Not Completed",
            };
          }
          return value;
        }),
      ];
    case DELETE_TASK:
      console.log(payload);
      return [...state.filter((value) => value._id !== payload)];
    default:
      return state;
  }
};

export default taskReducer;
