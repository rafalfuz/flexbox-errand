import React from "react";
import Article from "./supportComponents/Article";
import "../styles/mainContent.scss";

const MainContent = () => {
  const mainArticles = [
    {
      id: "1",
      img: "https://placeimg.com/640/480/arch",
      title: "Tytul pierwszy",
      text:
        "First Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nisl in porta consectetur. Morbi ornare risus eget lacinia dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nisl in porta consectetur. Morbi ornare risus eget lacinia dictum.",
      button: true,
    },
    {
      id: 2,
      img: "https://placeimg.com/640/480/tech",
      title: "Tytul drugi",
      text:
        "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nisl in porta consectetur. Morbi ornare risus eget lacinia dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nisl in porta consectetur. Morbi ornare risus eget lacinia dictum.",
      button: true,
    },
  ];

  const article = mainArticles.map((mainArticle) => (
    <Article
      img={mainArticle.img}
      key={mainArticle.id}
      title={mainArticle.title}
      text={mainArticle.text}
      btn={mainArticle.button}
    />
  ));

  return (
    <section className="main-content">
      <h1 className="main-content__title">Polecamy</h1>
      {article}
    </section>
  );
};

export default MainContent;
