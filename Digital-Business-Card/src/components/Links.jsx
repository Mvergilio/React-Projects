import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Links extends Component {
  render() {
    return (
      <div className="contact--links--container">
        <a href="#">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          Email
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          Linkedin
        </a>
      </div>
    );
  }
}
