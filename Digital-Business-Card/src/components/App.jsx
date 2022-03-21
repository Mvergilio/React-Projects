import React, { Component } from "react";
import Image from "./Img-section";
import MainContent from "./Main-content";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Image />
        <MainContent />
      </div>
    );
  }
}
