import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header app__header">
      <div className="header__logo-container">
        <img className="logo-container__image" alt="img"></img>
        <div className="logo-container__title logo-container__title--large"></div>
        <div className="logo-container__title logo-container__title--small"></div>
      </div>
      <div className="searcher header__searcher">
        <input
          className="searcher__textpool"
          type="text"
          placeholder="Czego szukasz?"
        ></input>
        <button clasName="button searcher__button"></button>
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
