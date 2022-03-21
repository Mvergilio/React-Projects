import React, { Component } from "react";
import About from "./About";
import Interests from "./Interests";

export default class info extends Component {
  render() {
    return (
      <div>
        <About />
        <Interests />
      </div>
    );
  }
}
