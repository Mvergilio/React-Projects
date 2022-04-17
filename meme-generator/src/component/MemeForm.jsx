import React from "react";
import { MemeImg } from "./MemeImg";
export default function Meme() {
  const [memeData, setMemeData] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeData(data.data.memes));
  }, []);

  function handleImg(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * memeData.length);
    const url = memeData[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      url: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="main--container">
      <form action="get" className="form">
        <div className="form--input-container">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Top Text"
            name="topText"
            id="topText"
            value={meme.topText}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            id="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={handleImg} className="form--input--btn">
          Get a new image meme
        </button>
      </form>
      <MemeImg {...meme} />
    </div>
  );
}
