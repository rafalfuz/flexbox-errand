import React from "react";
import ImpArticleOne from "./ImpArticles/ImpArticleOne";
import ImpArticleTwo from "./ImpArticles/ImpArticleTwo";

const MainContent = () => {
  return (
    <div className="main-content app__main-content">
      <h1 className="main-content__title">Polecamy</h1>
      <ImpArticleOne />
      <ImpArticleTwo />
    </div>
  );
};

export default MainContent;
