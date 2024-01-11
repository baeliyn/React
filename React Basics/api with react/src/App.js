import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [joke, setJoke] = React.useState(0);

  React.useEffect(
    function () {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => setJoke(data.value));
    },
    [count]
  );

  return (
    <>
      <div>
        <label>The count is {count}</label>
        <br />
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount((prev) => 0);
          }}
        >
          Reset
        </button>
        <p>{joke}</p>
      </div>
    </>
  );
}

export default App;
