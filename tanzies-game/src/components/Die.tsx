import React from "react";
import "../styles/Die.css";

interface props {
  number: number;
}
function Die({ number }: props) {
  return <div className="die">{number}</div>;
}

export { Die };
