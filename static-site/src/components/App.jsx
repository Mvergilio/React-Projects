import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Nav />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
