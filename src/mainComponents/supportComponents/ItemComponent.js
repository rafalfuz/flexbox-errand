import React from "react";
import "../../styles/supportItem.css";

const ItemComponent = (props) => {
  return (
    <div className="support-item">
      <img className="support-item__picture" src={props.img} alt="img"></img>
      <h2 className="support-item__title">{props.title}</h2>
    </div>
  );
};

export default ItemComponent;
