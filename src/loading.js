import React from "react";
import "./spinner.scss";

const Loading = () => {
  return (
    <div>
      <p className="loading">Loading</p>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Loading;
