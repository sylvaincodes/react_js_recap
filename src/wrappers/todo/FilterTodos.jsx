import { filterTodos } from "../../utils/helpers/task";
import PropTypes from "prop-types";

const FilterTodos = ({ todos, setTodos, setFilter }) => {
  const handleFilter = (params, todos) => {
    let newTodos = filterTodos(params, todos);
    setFilter(newTodos);
  };

  return (
    <div className="filter-area mt-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-row gap-4 justify-content-lg-start align-items-center w-100">
              <label htmlFor="all">
                <strong>TOUS :</strong>
                <button
                  id="all"
                  className="btn btn-outline-light rounded-pill"
                  onClick={() => handleFilter("all", todos)}
                >
                  📅
                </button>
              </label>

              <label htmlFor="done">
                <strong>TERMINES :</strong>
                <button
                  id="done"
                  className="btn btn-outline-light rounded-pill"
                  onClick={() => handleFilter("done", todos)}
                >
                  ✅
                </button>
              </label>

              <label htmlFor="todo">
                <strong>A FAIRE :</strong>
                <button
                  id="todo"
                  className="btn btn-outline-light rounded-pill"
                  onClick={() => handleFilter("todo", todos)}
                >
                  👨‍💻
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterTodos.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setFilter: PropTypes.func,
};

export default FilterTodos;
