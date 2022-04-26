import React, { useState } from "react";
import "../styles/App.css";
import { Die } from "./Die";

function App() {
  const [numbersArr, setNumbersArr] = useState([
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
    { number: 1, freeze: false },
  ]);

  function createRandomArray() {
    const randomArray: number[] = [];

    while (randomArray.length < 10) {
      const randomNum: number = Math.floor(Math.random() * 6) + 1;
      randomArray.push(randomNum);
    }
    setNumbersArr((prevState) => {
      const newState = randomArray.map((num: number, index: number) => ({
        ...prevState[index],
        number: num,
      }));

      return newState;
    });
  }
  const dieArr = numbersArr.map(
    (obj: { number: number; freeze: boolean }, index: number) => (
      <Die key={index} numberObj={obj} />
    )
  );
  return (
    <main className="main--container">
      <div className="main--description--container">
        <h2>Tanzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="main--die--container">{dieArr}</div>
      <button
        onClick={createRandomArray}
        type="button"
        className="main--button"
      >
        Roll
      </button>
    </main>
  );
}

export default App;
