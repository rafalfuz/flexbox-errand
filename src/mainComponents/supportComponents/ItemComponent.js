import React from "react";
import "../../styles/supportItem.css";

const ItemComponent = (props) => {
  return (
    <div className="secondary-content__support-item">
      <img
        className="secondary-content__picture"
        src={props.img}
        alt="img"
      ></img>
      <h2 className="secondary-content__title">{props.title}</h2>
    </div>
  );
};

export default ItemComponent;
