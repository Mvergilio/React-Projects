import React from "react";

export default function Card(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;
  return (
    <article className="main--card--container">
      <img className="main--card--image" src={`${imageUrl}`} alt="" />
      <div className="main--article-descrition--container">
        <div className="main-article-location-container">
          <div className="main--icon--container">
            <img src="./src/images/localeIcon.png" alt="" />
            <h5>{location}</h5>
          </div>
          <a href={`${googleMapsUrl}`}>See on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <div className="main--article-content--container">
          <h3>
            {startDate} - {endDate}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
