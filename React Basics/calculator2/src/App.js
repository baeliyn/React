import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const GaurangParmar = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result + Number(inputRef.current.value);
    });
  };

  const GaurangParmar1 = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result - Number(inputRef.current.value);
    });
  };

  const GaurangParmar2 = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result * Number(inputRef.current.value);
    });
  };

  const GaurangParmar3 = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result / Number(inputRef.current.value);
    });
  };

  const GaurangParmar4 = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const GaurangParmar5 = (e) => {
    e.preventDefault();
    setResult((result) => result * 0);
    inputRef.current.value = 0;
  };

  console.log(result);

  return (
    <div>
      <h2>Build a Calculator using React</h2>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          pattern="[0-9]"
          placeholder="Type a number"
        />
        <br />
        <button onClick={GaurangParmar}>add</button>
        <button onClick={GaurangParmar1}>subtract</button>
        <button onClick={GaurangParmar2}>multiply</button>
        <button onClick={GaurangParmar3}>divide</button>
        <button onClick={GaurangParmar4} className="btn1">
          reset input
        </button>
        <button onClick={GaurangParmar5} className="btn2">
          reset result
        </button>
      </form>
    </div>
  );
};

export default App;
