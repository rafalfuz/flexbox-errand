import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="menu app__menu">
      <nav className="menu__navigation">
        <ul className="navigation__list">
          <li key={"1"} className="list__item list__item--first">
            <a className="item__link item__link--first" href="/">
              home
            </a>
          </li>
          <li key={"2"} className="list__item list__item--second">
            <a className="item__link item__link--second" href="/">
              products
            </a>
          </li>
          <li key={"3"} className="list__item list__item--third">
            <a className="item__link item__link--third" href="/">
              future
            </a>
          </li>
        </ul>
      </nav>
      <button className="button menu__button"></button>
    </div>
  );
};

export default Navigation;
