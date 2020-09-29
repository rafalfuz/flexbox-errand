import React from "react";
import "../../styles/importantArticle.css";

const Article = (props) => {
  return (
    <div className="main-content__wrapper">
      <img
        className="main-content__article-img"
        src={props.img}
        alt="img"
      ></img>
      <h1 className="main-content__article-title">{props.title}</h1>
      <p className="main-content__article-description">{props.text}</p>
      <button className="main-content__button"></button>
    </div>
  );
};

export default Article;
