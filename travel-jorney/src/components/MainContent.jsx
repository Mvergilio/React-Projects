import React from "react";
import Card from "./Card";
import data from "../data";
export default function MainContent() {
  const place = data.map((locale, index) => {
    return <Card key={index} {...locale} />;
  });
  return <section className="main--section--container">{place}</section>;
}
