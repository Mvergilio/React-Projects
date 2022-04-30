import React from "react";
import "../styles/Die.css";

interface Props {
  index: number;
  changeBooleanValue: () => void;
  numberObj: { value: number; freeze: boolean };
}
interface Style {
  backgroundColor: string;
}

function Die(props: Props) {
  const {
    index,
    changeBooleanValue,
    numberObj: { value, freeze },
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
      {value}
    </div>
  );
}

export { Die };
