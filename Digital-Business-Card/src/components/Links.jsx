import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Links extends Component {
  render() {
    return (
      <div className="contact--links--container">
        <a className="email" href="#">
          <FontAwesomeIcon
            icon="fa-solid fa-square-envelope"
            className="contact--link--icon-email"
            pull="left"
          />
          Email
        </a>
        <a className="linkedin" href="#">
          <FontAwesomeIcon
            className="contact--link--icon-linkedin"
            icon="fa-brands fa-linkedin"
            pull="left"
            inverse
          />
          Linkedin
        </a>
      </div>
    );
  }
}
