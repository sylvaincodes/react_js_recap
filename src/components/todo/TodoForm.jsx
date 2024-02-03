import { FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux-toolkit/slices/taskSlice";

const TodoForm = ({ todos, setFilter }) => {
  const dispatch = useDispatch();
  // use formik
  const formik = useFormik({
    initialValues: {
      task: "ajouter une tâche",
    },
    validationSchema: yup.object({
      task: yup
        .string()
        .min(6, "Au minimum 6 batonnets s'il te plaît 🦴🦴🦴🦴🦴🦴")
        .required("Oh non.... je suis vide 😭 "),
    }),
    onSubmit: async (values) => {
      const toastId = toast(<span className="fw-bolder">Chargment</span>, {
        icon: "",
      });

      setFilter("");

      // let newArray = [
      //   {
      //     id: todos.length + 1,
      //     content: values.task,
      //     done: false,
      //   },
      //   ...todos,
      // ];

      // await setTodos(newArray);

      dispatch(addTask(values.task));
      toast.success(
        todos.length > 4
          ? "C'est déja beaucoup non 🥵"
          : "Du travail encore, j'adore 😎✔️👍!",
        {
          id: toastId,
        }
      );
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`form-container d-flex gap-3 bg-light shadow-lg p-3 
    rounded-pill w-100 my-2 ${
      formik.touched.task && formik.errors.task
        ? "border border-danger"
        : "border-0"
    } `}
    >
      <input
        value={formik.values.task}
        name="task"
        type="text"
        placeholder="Ajouter une tâche"
        className={`border-0 w-75 fs-4 fw-bold bg-light text-secondary`}
        onChange={formik.handleChange}
      />
      {formik.touched.task && formik.errors.task ? (
        <label className="text-danger fw-bolder " type="invalid">
          {formik.errors.task}
        </label>
      ) : null}
      <button
        title="Ajouter"
        type="submit"
        className="d-inline-flex align-items-center btn-sm 
        btn-outline-light ms-auto rounded-pill bg-light fs-4 fw-bold"
      >
        <FaPlus />
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setFilter: PropTypes.func,
};

export default TodoForm;
