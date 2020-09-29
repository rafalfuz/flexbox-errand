import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="menu">
      <nav className="menu__navigation">
        <ul className="menu__list">
          <li key={"1"} className="menu__item">
            <a className="menu__link" href="/">
              home
            </a>
          </li>
          <li key={"2"} className="menu__item">
            <a className="menu__link" href="/">
              products
            </a>
          </li>
          <li key={"3"} className="menu__item">
            <a className="menu__link" href="/">
              future
            </a>
          </li>
        </ul>
      </nav>
      <button className="menu__button"></button>
    </div>
  );
};

export default Navigation;
