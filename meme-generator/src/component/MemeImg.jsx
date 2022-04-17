import React from "react";

export function MemeImg(props) {
  return (
    <div className="main--meme--container">
      <img src={props.url} />
      {props.topText && <h1 className="top--text">{props.topText}</h1>}
      {props.bottomText && <h1 className="bottom--text">{props.bottomText}</h1>}
    </div>
  );
}
