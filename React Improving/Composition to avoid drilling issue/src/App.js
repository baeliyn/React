import React from "react";
import "./App.css";

function App() {
  const [boss, setBooz] = React.useState("WARRANT");

  return (
    <div className="App">
      <div>Header</div>
      <Starter>
        <Second>
          <Third>
            <Fourth booz={boss} />
          </Third>
        </Second>
      </Starter>
    </div>
  );
}

/* Every component will be expanded and you will write the other component in it and they will be defined as children instead of writing them you write in one place*/
/* If a drilling situation comes up you can use this children method but this can also get complicated so dont use it like i did in here */

function Starter({ children }) {
  return (
    <div>
      im the Starter <br /> {children}
    </div>
  );
}

function Second({ children }) {
  return (
    <div>
      im the Second <br /> {children}
    </div>
  );
}

function Third({ children }) {
  return (
    <div>
      im the Third <br /> {children}
    </div>
  );
}

function Fourth(props) {
  return <div>im the {props.booz}</div>;
}

/* 
THIS IS TOTALLY WRONG YOU SHOULD RATHER CONTEXTAPI THAN THIS THIS IS THE WORST WAY POSSIBLE

function Starter(props) {
  return (
    <div>
      im the Starter <br /> <Second booz={props.booz} />
    </div>
  );
}

function Second(props) {
  return (
    <div>
      im the Second <br /> <Third booz={props.booz} />
    </div>
  );
}

function Third(props) {
  return (
    <div>
      im the Third <br /> <Fourth booz={props.booz} />
    </div>
  );
}

function Fourth(props) {
  return <div>im the {props.booz}</div>;
} */

export default App;
