import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">Page Not Found</h4>
         
          <div className="col-md-3 col-sm-6">
            <Link to="/" className="text-white text-decoration-none">
            <button className="  col-12 btn btn-primary mt-5">
              Home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
