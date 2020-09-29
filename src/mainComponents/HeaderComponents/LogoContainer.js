import React from "react";
import "../../styles/logo.scss";
import logo from "../../images/97596faa-0756-41e4-bc8f-a92275441318_200x200.png";

const LogoContainer = () => {
  return (
    <div className="logo">
      <img className="logo__image" alt="img" src={logo}></img>
      <h4 className="logo__title">RAFALFUZ GROUP</h4>
    </div>
  );
};

export default LogoContainer;
