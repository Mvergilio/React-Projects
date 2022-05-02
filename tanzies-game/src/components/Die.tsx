/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "../styles/Die.css";

interface Props {
  index: number;
  // eslint-disable-next-line no-unused-vars
  changeBooleanValue: (index: number) => void;
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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
