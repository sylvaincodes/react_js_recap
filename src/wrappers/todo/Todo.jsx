import { useMemo, useState } from "react";
import TodoDesc from "../../components/todo/TodoDesc";
import TodoForm from "../../components/todo/TodoForm";
import TodoSingle from "../../components/todo/TodoSingle";
import FilterTodos from "./FilterTodos";
import { useSelector } from "react-redux";

const Todo = () => {
  const { tasks } = useSelector((state) => state.task);

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState([]);

  useMemo(() => {
    setTodos(tasks);
  }, [tasks]);

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

              <TodoForm todos={todos} setFilter={setFilter} />
              <FilterTodos
                todos={todos}
                setTodos={setTodos}
                setFilter={setFilter}
              />

              <div className="to-do-list d-flex flex-column gap-3 my-5 w-100">
                {filter.length === 0
                  ? todos &&
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
                      .sort((a, b) => b.id - a.id)
                  : filter &&
                    filter
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
