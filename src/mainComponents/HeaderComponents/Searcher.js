import React from "react";
import "../../styles/searcher.scss";

class Searcher extends React.Component {
  render() {
    return (
      <form className="searcher">
        <input
          className="searcher__input"
          type="text"
          placeholder="Czego szukasz?"
        ></input>
        <button className="searcher__button">Szukaj!</button>
      </form>
    );
  }
}

export default Searcher;
