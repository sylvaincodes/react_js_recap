export const FETCH_TASKS = "FETCH_BRANDS_SUCCESS";

const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});

export const fetchBrands = (tasks) => {
  return (dispatch) => {
    dispatch(fetchTasksSuccess(tasks));
  };
};
