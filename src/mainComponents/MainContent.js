import React from "react";
import Article from "./supportComponents/Article";
import "../styles/mainContent.css";

const MainContent = () => {
  const mainArticles = [
    {
      id: 1,
      img: "",
      title: "Tytul pierwszy",
      text:
        "First Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nisl in porta consectetur. Morbi ornare risus eget lacinia dictum.",
      button: true,
    },
    {
      id: 2,
      img: "",
      title: "Tytul drugi",
      text:
        "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nisl in porta consectetur. Morbi ornare risus eget lacinia dictum.",
      button: true,
    },
  ];

  const article = mainArticles.map((mainArticle) => (
    <Article
      img={mainArticle.img}
      id={mainArticle.id}
      title={mainArticle.title}
      text={mainArticle.title}
      btn={mainArticle.button}
    />
  ));

  return (
    <div className="main-content app__main-content">
      <h1 className="main-content__title">Polecamy</h1>
      {article}
    </div>
  );
};

export default MainContent;
