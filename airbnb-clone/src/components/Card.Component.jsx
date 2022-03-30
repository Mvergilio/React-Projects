import React from "react";

export default function Card(props) {
  return (
    <div className="card--container">
      <img src={`./src/images/${props.img}`} alt="" />
      <div className="card--rating--container">
        <img src="./src/images/Star.png" alt="" />
        <p>
          <span className="rating">{props.rating}</span>
          <span className="reviewCount">
            ({props.review}) . {props.location}
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
