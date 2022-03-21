import React, { Component } from "react";
import Links from "./Links";
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="main--name">
          <h3>Marco Antonio Vergilio</h3>
          <h4>Front-end developer</h4>
          <a href="http://mvergilio.website">
            <h5>mvergilio.website</h5>
          </a>
        </div>

        {/* social-network links */}
        <Links />
      </>
    );
  }
}
