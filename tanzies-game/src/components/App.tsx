import React from "react";
import "../styles/App.css";
import { Die } from "./Die";

function App() {
  return (
    <main className="main--container">
      <div className="main--description--container">
        <h2>Tanzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="main--die--container">
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </div>
      <button type="button" className="main--button">
        Roll
      </button>
    </main>
  );
}

export default App;
