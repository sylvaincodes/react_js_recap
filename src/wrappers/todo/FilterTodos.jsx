import { filterTodos } from "../../utils/helpers/task";
import PropTypes from "prop-types";

const FilterTodos = ({ todos, setTodos }) => {
  const handleFilter = (params) => {
    let newTodos = filterTodos(params, todos);
    setTodos(newTodos);
  };

  return (
    <div className="filter-area w-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-row gap-4 justify-content-lg-start align-items-center w-100">
              <span>Filtrer :</span>
              <button
                className="btn btn-outline-light rounded-pill"
                onClick={handleFilter("done")}
              >
                <img
                  src="./icons/check-list.png"
                  alt="todoimage"
                  className="img-fluid"
                  width={25}
                  height={25}
                />
              </button>

              <button className="btn btn-outline-light rounded-pill">
                <img
                  src="./icons/to-do-list.png"
                  alt="todoimage"
                  className="img-fluid"
                  width={25}
                  height={25}
                />
              </button>
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
};

export default FilterTodos;
