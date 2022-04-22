import React from "react";
import "../styles/App.css";
import { Die } from "./Die";

function App() {
  return (
    <main className="main--container">
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
    </main>
  );
}

export default App;
