import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header app__header">
      <div className="logo-container header__logo-container">
        <img className="logo-container__image" alt="img"></img>
        <div className="logo-container__title logo-container__title--large">
          duzy napis
        </div>
        <div className="logo-container__title logo-container__title--small">
          maly napis
        </div>
      </div>
      <div className="searcher header__searcher">
        <input
          className="searcher__textpool"
          type="text"
          placeholder="Czego szukasz?"
        ></input>
        <button className="button searcher__button">Szukaj</button>
      </div>
      <div className="settings header__settings">
        <img className="settings__btn" alt="img"></img>
        <img className="settings__btn" alt="img"></img>
        <img className="settings__btn" alt="img"></img>
      </div>
    </header>
  );
};

export default Header;
