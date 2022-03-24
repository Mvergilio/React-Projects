import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="main--footer--container">
      <a href="#">
        <FontAwesomeIcon
          className="main--footer-icon"
          icon="fa-brands fa-twitter-square"
          size="2xl"
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className="main--footer-icon"
          icon="fa-brands fa-facebook-square"
          size="2xl"
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className="main--footer-icon"
          icon="fa-brands fa-instagram-square"
          size="2xl"
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className="main--footer-icon"
          icon="fa-brands fa-github-square"
          size="2xl"
        />
      </a>
    </div>
  );
};
export default Footer;
