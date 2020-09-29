import React from "react";
import "../../styles/importantArticle.css";

const Article = (props) => {
  return (
    <article className="article">
      <img className="article__img" src={props.img} alt="img"></img>
      <h1 className="article__title">{props.title}</h1>
      <p className="article__description">{props.text}</p>
      <button className="article__button"></button>
    </article>
  );
};

export default Article;
