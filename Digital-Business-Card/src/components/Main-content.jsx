import React, { Component } from "react";
import Contact from "./Contact";
import Info from "./Info";
export default class MainContent extends Component {
  render() {
    return (
      <main>
        <Contact />
        <Info />
      </main>
    );
  }
}
