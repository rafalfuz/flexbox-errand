import React from "react";
import "../styles/navigation.scss";

const Menu = (props) => {
  return (
    <li key={props.id} className="menu__item">
      <a className="menu__link" href={props.path}>
        {props.title}
      </a>
    </li>
  );
};

const Navigation = () => {
  const menuDetails = [
    { id: 1, title: "link1", path: "/link-one" },
    { id: 2, title: "link2", path: "/link-two" },
    { id: 3, title: "link3", path: "/link-three" },
    { id: 4, title: "link4", path: "/link-four" },
  ];

  const menu = menuDetails.map((item) => (
    <Menu key={item.id} path={item.path} title={item.title} />
  ));

  return (
    <nav className="menu">
      <ul className="menu__list">{menu}</ul>
    </nav>
  );
};

export default Navigation;
