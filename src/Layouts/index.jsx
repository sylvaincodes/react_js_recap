import PropTypes from "prop-types";
import Header from "../wrappers/header/index";
import Footer from "../wrappers/footer/index";

const index = ({ children }) => {
  return (
    <div id="wrapper" className="bg-white vh-100">
      <Header /> {children}
      <Footer />
    </div>
  );
};

index.propTypes = {
  children: PropTypes.element,
};

export default index;
