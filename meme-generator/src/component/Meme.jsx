import React from "react";
// "http://i.imgflip.com/1bij.jpg"
export default function Meme() {
  return (
    <form action="get" className="form">
      <div className="form--input-container">
        <input type="text" placeholder="Top Text" name="first" id="first" />
        <input
          type="text"
          placeholder="Bottom Text"
          name="second"
          id="second"
        />
      </div>
      <button className="form--input--btn">Get a new image meme</button>
    </form>
  );
}
