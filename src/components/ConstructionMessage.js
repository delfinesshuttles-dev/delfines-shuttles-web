import React from 'react';

const ConstructionMessage = () => {
  return (
    <div className="construction-container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4 text-white">Site under construction!</h1>
        <p className="lead text-white">
          We are working to give you the best experience.
        </p>
        <button className="btn btn-primary btn-lg">More information</button>
      </div>
    </div>
  );
};

export default ConstructionMessage;
