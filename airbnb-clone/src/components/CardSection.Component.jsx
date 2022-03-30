import React from "react";
import Data from "../data";
import Card from "./Card.Component";

export default function CardSection() {
  const dataCard = Data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        review={card.stats.reviewCount}
        title={card.title}
        location={card.location}
      />
    );
  });
  return <section className="card--section">{dataCard}</section>;
}
