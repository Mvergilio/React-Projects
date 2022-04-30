import { nanoid } from "nanoid";
import React, { useState, useEffect, useMemo } from "react";
import { Confetti } from "react-confetti-cannon";
import "../styles/App.css";
import { Die } from "./Die";

interface NumberArr {
  value: number;
  freeze: boolean;
}

function App() {
  const launchPoints = useMemo(
    () => [
      () => ({
        x: window.innerWidth / 1.09,
        y: window.innerHeight,
        angle: 45,
      }),
    ],
    []
  );
  const launchPoints2 = useMemo(
    () => [
      () => ({
        x: window.innerWidth / 15,
        y: window.innerHeight,
        angle: -45,
      }),
    ],
    []
  );

  function createRandomArray() {
    const randomArray: NumberArr[] = [];

    while (randomArray.length < 10) {
      const randomNum: number = Math.floor(Math.random() * 6) + 1;
      randomArray.push({ value: randomNum, freeze: false });
    }
    return randomArray;
  }
  const [numbersArr, setNumbersArr] = useState<NumberArr[]>(
    createRandomArray()
  );
  const [tenzies, setTenzies] = useState(false);

  function handleChangeNumber() {
    if (tenzies) {
      setNumbersArr(createRandomArray());
      setTenzies(false);
    } else {
      setNumbersArr((prevState) =>
        prevState.map((elem: NumberArr) =>
          elem.freeze ? elem : { ...elem, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  useEffect(() => {
    const isFreeze: boolean = numbersArr.every((elem) => elem.freeze === true);
    const firstNumber: number = numbersArr[0].value;
    const numberIsTheSame: boolean = numbersArr.every(
      (elem) => elem.value === firstNumber
    );
    if (isFreeze && numberIsTheSame) setTenzies(isFreeze);
  }, [numbersArr]);

  function changeBooleanValue(id: number) {
    setNumbersArr((prevState) => {
      const newStateWithNewBoolean: NumberArr[] = prevState.map(
        (elem: NumberArr, index: number) =>
          id === index ? { ...elem, freeze: !elem.freeze } : elem
      );
      return newStateWithNewBoolean;
    });
  }

  const dieArr = numbersArr.map(
    (obj: { value: number; freeze: boolean }, index: number) => (
      <Die
        key={nanoid()}
        index={index}
        changeBooleanValue={changeBooleanValue}
        numberObj={obj}
      />
    )
  );
  return (
    <main className="main--container">
      {tenzies && <Confetti launchPoints={launchPoints} />}
      {tenzies && <Confetti launchPoints={launchPoints2} />}
      <div className="main--description--container">
        <h2>Tanzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="main--die--container">{dieArr}</div>
      <button
        onClick={handleChangeNumber}
        type="button"
        className="main--button"
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
