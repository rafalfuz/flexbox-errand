import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import SecondaryContent from "./SecondaryContent";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Navigation />
        <MainContent />
        <SecondaryContent />
        <Footer />
      </div>
    );
  }
}

export default App;
