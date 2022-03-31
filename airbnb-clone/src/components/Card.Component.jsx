import React from "react";

export default function Card(props) {
  console.log(props.title);
  const {
    title,
    location,
    coverImg,
    price,
    openSpots,
    stats: { rating, reviewCount },
  } = props;
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      {badgeText && <span className="card--sold--out--bage">{badgeText}</span>}
      <img src={`./src/images/${coverImg}`} alt="" />
      <div className="card--rating--container">
        <img src="./src/images/Star.png" alt="" />
        <p>
          <span className="rating">{rating}</span>
          <span className="reviewCount">
            ({reviewCount}) • {location}
          </span>
        </p>
      </div>
      <p>{title}</p>
      <p>
        <strong>From $ {price}</strong> / person
      </p>
    </div>
  );
}
