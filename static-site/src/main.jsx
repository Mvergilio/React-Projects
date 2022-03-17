import React from "react";
import ReactDOM from "react-dom";
function StaticPage() {
  return (
    <div className="App">
      <img style={{ width: "40px" }} src="../react.logo.png" alt="react logo" />
      <div className="container">
        <h1 className="title">Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Wakie</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<StaticPage />, document.getElementById("root"));
