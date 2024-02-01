import { useMemo, useState } from "react";
import TodoDesc from "../../components/todo/TodoDesc";
import TodoForm from "../../components/todo/TodoForm";
import TodoSingle from "../../components/todo/TodoSingle";
import FilterTodos from "./FilterTodos";

const Todos = [
  { id: 1, content: "this is a task 1", done: true },
  { id: 2, content: "this is a task 2", done: false },
  { id: 3, content: "this is a task 3", done: false },
];
const Todo = () => {
  const [todos, setTodos] = useState(Todos);

  useMemo(() => {
    const sortedTodos = todos.sort((a, b) => b - a);
    setTodos(sortedTodos);
  }, [todos]);

  return (
    <div className="todo-area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-6">
            <div
              className="todo-wrapper d-flex flex-column 
                align-items-center justify-content-center"
            >
              <TodoDesc url="./icons/notebook.png" content="Enjoy Todo Tools" />

              {/* <FilterTodos todos={todos} setTodos={setTodos} /> */}
              <TodoForm todos={todos} setTodos={setTodos} />

              <div className="to-do-list d-flex flex-column gap-3 my-5 w-100">
                {todos &&
                  todos
                    .map((single, idx) => {
                      return (
                        <TodoSingle
                          todos={todos}
                          setTodos={setTodos}
                          single={single}
                          key={idx}
                        />
                      );
                    })
                    .sort((a, b) => b.id - a.id)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
