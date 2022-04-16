import React from "react";

export function MemeImg(props) {
  return (
    <div>
      <img src={props.url} />
      {props.topText && <h1>{props.topText}</h1>}
      {props.bottomText && <h1>{props.bottomText}</h1>}
    </div>
  );
}
