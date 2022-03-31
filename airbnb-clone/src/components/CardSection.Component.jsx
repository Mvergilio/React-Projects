import React from "react";
import Data from "../data";
import Card from "./Card.Component";

export default function CardSection() {
  const dataCard = Data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return <section className="card--section">{dataCard}</section>;
}
