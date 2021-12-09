import React from "react";
import errorImg from "../asset/img/preview.jpg";
const errorBoundry = () => {
  return (
    <div className="img_box">
      <img src={errorImg}></img>
    </div>
  );
};

export default errorBoundry;
