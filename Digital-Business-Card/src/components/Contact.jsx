import React, { Component } from "react";
import Links from "./Links";
export default class Contact extends Component {
  render() {
    return (
      <div className="main--contact-container">
        <div className="main--name">
          <h3>Marco Antonio Vergilio</h3>
          <h5>Front-end developer</h5>
          <a href="http://mvergilio.website">
            <h6>mvergilio.website</h6>
          </a>
        </div>

        {/* social-network links */}
        <Links />
      </div>
    );
  }
}
