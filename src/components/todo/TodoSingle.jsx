// import React from 'react'
import PropTypes from "prop-types";
import { updateTodoStatus } from "../../utils/helpers/task";
import toast from "react-hot-toast";
import "animate.css";

const TodoSingle = ({ todos, setTodos, single }) => {
  const handleTodo = (todos, single) => {
    let newTodos = updateTodoStatus(todos, single);
    setTodos(newTodos);
    toast.success("Tâche mise à jour!");
  };

  return (
    <div
      className={`${
        single.id >= todos.length ? "animate__animated animate__flipInX" : ""
      } to-do-item d-flex flex-row gap-2 bg-light px-2 py-3 vw-75`}
      key={single.id}
    >
      <label
        htmlFor={`task-${single.id}`}
        className="d-flex flex-row w-100 gap-3 align-items-center"
      >
        <input
          type="checkbox"
          name="task"
          id={`task-${single.id}`}
          className="form-check-input rounded-pill p-3 border"
          onChange={() => handleTodo(todos, single)}
          checked={single.done ? true : false}
        />
        <span
          className={`text-black fw-light fs-4 ${
            single.done ? "text-decoration-line-through" : ""
          }`}
        >
          {single.content}
        </span>
      </label>
    </div>
  );
};

TodoSingle.propTypes = {
  single: PropTypes.object,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default TodoSingle;
