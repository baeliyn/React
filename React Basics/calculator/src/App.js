import React from "react";
import "./App.css";

function App() {
  const [result, sResult] = React.useState(0);
  const [operation, sOperation] = React.useState("");
  const [form, sForm] = React.useState("");

  function calculation(なになに) {
    const snake = なになに.target.value;
    sOperation(() => {
      return snake;
    });
    if (form !== "") {
      if (result == 0) {
        sForm(() => {
          return "";
        });

        sResult(() => {
          return form;
        });
      }
    }
  }

  function 変わる所(なになに) {
    const 値 = なになに.target.value;

    const 番号 = parseFloat(値);

    sForm(() => {
      return 番号;
    });
  }

  function かっこい(言葉) {
    言葉.preventDefault();
    let 番号;
    switch (operation) {
      case "+":
        番号 = result + form;
        break;
      case "-":
        番号 = result - form;
        break;
      case "x":
        番号 = result * form;
        break;
      case "/":
        番号 = result / form;
        break;
    }
    if (form !== "" && operation !== "") {
      sForm(() => {
        return "";
      });
      sResult(() => {
        return 番号;
      });
    }
  }

  return (
    <div className="App">
      <form onSubmit={かっこい}>
        <div className="calculator">
          {result}

          <input
            type="number"
            step="0.01"
            placeholder="Number"
            name="号"
            onChange={変わる所}
            value={form}
            maxLength={20}
            minLength={1}
            autoComplete="off"
            className="号"
          />
        </div>
        <div className="sumButtns">
          <button
            type="button"
            className={operation == "+" ? "ボタン ついている" : "ボタン"}
            value={"+"}
            onClick={calculation}
          >
            +
          </button>
          <button
            type="button"
            className={operation == "-" ? "ボタン ついている" : "ボタン"}
            value={"-"}
            onClick={calculation}
          >
            -
          </button>
          <button
            type="button"
            className={operation == "x" ? "ボタン ついている" : "ボタン"}
            value={"x"}
            onClick={calculation}
          >
            x
          </button>
          <button
            type="button"
            className={operation == "/" ? "ボタン ついている" : "ボタン"}
            value={"/"}
            onClick={calculation}
          >
            /
          </button>
        </div>
        <button className="ボタン 実行">=</button>
        <button
          type="button"
          className="ボタン 実行"
          onClick={() => {
            sResult(() => 0);
            sForm(() => "");
            sOperation(() => "");
          }}
        >
          Reset
        </button>
        <button
          type="button"
          className="ボタン 実行"
          onClick={() => {
            sResult(() => 0);
          }}
        >
          C
        </button>
      </form>
    </div>
  );
}

export default App;
