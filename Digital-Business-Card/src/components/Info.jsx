import React, { Component } from "react";
import About from "./About";
import Interests from "./Interests";

export default class info extends Component {
  render() {
    return (
      <div className="main--info-container">
        <About />
        <Interests />
      </div>
    );
  }
}
