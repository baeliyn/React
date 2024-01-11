import React from "react";
import "./App.css";

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <div className="App">
      <form>
        <fieldset>
          <label htmlFor="range">Rank it up!: {score}</label>
          <br />
          <br />
          <input
            id="range"
            type="range"
            max="10"
            min="0"
            onChange={(e) => setScore(e.target.value)}
          />
        </fieldset>
        <button className="gross" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
