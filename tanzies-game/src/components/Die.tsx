import React from "react";
import "../styles/Die.css";

interface Props {
  index: number;
  changeBooleanValue: void;
  numberObj: { number: number; freeze: boolean };
}
interface Style {
  backgroundColor: string;
}

function Die(props: Props) {
  const {
    index,
    changeBooleanValue,
    numberObj: { number, freeze },
  } = props;

  const styles: Style = {
    backgroundColor: freeze ? "green" : "white",
  };
  return (
    <div
      style={styles}
      onClick={() => changeBooleanValue(index)}
      className="die"
    >
      {number}
    </div>
  );
}

export { Die };
