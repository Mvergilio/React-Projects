import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="logo">
          <img src="./src/images/react.logo.png" width="60px" alt="" />
          <h3>React Logo</h3>
        </div>
        <h2>Menu Content Space</h2>
      </nav>
    );
  }
}
