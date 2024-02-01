import PropTypes from "prop-types";
import { Fragment } from "react";

const TodoDesc = ({ url, content }) => {
  return (
    <Fragment>
      <div className="image-todo">
        <img
          src={url}
          alt="todoimage"
          className="img-fluid"
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-capitalize fw-bold">{content}</h1>
    </Fragment>
  );
};

TodoDesc.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string,
};

export default TodoDesc;
