import { Link } from "react-router-dom";
const index = () => {
  return (
    <div className="footer-area position-fixed bottom-0 bg-light w-100 py-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="d-flex flex-column align-items-center 
            justify-content-center flex-wrap gap-1"
            >
              <Link
                className="text-primary fw-bold"
                to="https://sylvaincodes.web.app/"
              >
                Sylvaincodes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
