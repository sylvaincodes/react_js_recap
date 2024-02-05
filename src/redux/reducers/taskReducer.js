import { FETCH_TASKS } from "../actions/taskActions";

const initState = {
  tasks: [],
  task: {},
};

const taskReducer = (state = initState, action) => {
  if (action.type === FETCH_TASKS) {
    return {
      ...state,
      tasks: action.payload,
    };
  }

  return state;
};

export default taskReducer;
