import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__image" alt="img"></img>
        <div className="header__title header__title--large">duzy napis</div>
        <div className="header__title header__title--small">maly napis</div>
      </div>
      <div className="header__searcher">
        <input
          className="header__input"
          type="text"
          placeholder="Czego szukasz?"
        ></input>
        <button className="header__button">Szukaj</button>
      </div>
      <div className="header__settings">
        <img className="header__setting-icon" alt="img"></img>
        <img className="header__setting-icon" alt="img"></img>
        <img className="header__setting-icon" alt="img"></img>
      </div>
    </header>
  );
};

export default Header;
