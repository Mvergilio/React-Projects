import React, { Component } from "react";
import Image from "./Img-section";
import MainContent from "./Main-content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas, faCheckSquare, faCoffee);
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
