import React from "react";
import "../styles/Die.css";

interface Props {
  numberObj: { number: number; freeze: boolean };
}

function Die(props: Props) {
  const {
    numberObj: { number, freeze },
  } = props;
  return <div className="die">{number}</div>;
}

export { Die };
