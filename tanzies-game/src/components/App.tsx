import React, { useState } from "react";
import "../styles/App.css";
import { Die } from "./Die";

function App() {
  const [numbersArr, setNumbersArr] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

  function createRandomArray() {
    const randomArray: number[] = [];

    while (randomArray.length < 10) {
      const randomNum: number = Math.floor(Math.random() * 6) + 1;
      randomArray.push(randomNum);
    }
    setNumbersArr(randomArray);
  }
  const dieArr = numbersArr.map((number, index) => (
    <Die key={index} number={number} />
  ));
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
