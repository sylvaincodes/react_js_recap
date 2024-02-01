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
              <h4 className="text-capitalize fw-lighter">
                Simple projet Réact Js Fait par
              </h4>
              <Link
                className="text-primary fw-bold"
                to="https://sylvaincodes.web.app/"
              >
                Sylvaincodes
              </Link>
              <span className="text-secondary">
                Projet Disponible sur GitHub Pour une utilisation éducative
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
