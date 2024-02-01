import Layout from "../Layouts/index";
import Todo from "../wrappers/todo/Todo";

const Home = () => {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
