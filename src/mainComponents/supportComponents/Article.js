import React from "react";
import "../../styles/importantArticle.css";

const Article = (props) => {
  return (
    <div className="article main-content__article">
      <img className="article__image" src={props.img} alt="img"></img>
      <h1 className="article__title">{props.title}</h1>
      <p className="article___text">{props.text}</p>
      <button className="button article__button article__button-hover"></button>
    </div>
  );
};

export default Article;
