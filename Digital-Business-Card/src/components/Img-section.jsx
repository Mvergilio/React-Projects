import React, { Component } from "react";
export default class Image extends Component {
  render() {
    const style = {
      width: "100px",
    };
    return (
      <div className="img--container" style={style}>
        <img src="./src/images/profile-picture.jpg" width={"100%"} alt="" />
      </div>
    );
  }
}
