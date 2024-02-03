import { createSlice } from "@reduxjs/toolkit";
import { getTasks, setTask } from "../../utils/services/apiRequest";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    filters: [],
    task: {},
    filter: {},
  },

  reducers: {
    fetchTasks: () => {},
    fetchTask: () => {},
    addTask: (action) => {
      console.log(action);
      setTask(action.payload);
    },
    updateTask: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { fetchTasks, fetchTask, addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
