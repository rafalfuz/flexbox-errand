import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Navigation />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default App;
