import React from "react";
import "../styles/header.scss";
import LogoContainer from "./HeaderComponents/LogoContainer";
import Searcher from "./HeaderComponents/Searcher";
import Settings from "./HeaderComponents/Settings";

const Header = () => {
  return (
    <header className="header">
      <LogoContainer />
      <Searcher />
      <Settings />
    </header>
  );
};

export default Header;
