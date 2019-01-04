import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
