import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";

const Row = ({ children }) => {
  return <div className="Row">{children}</div>;
};

function App() {
  return (
    <div>
      <Card>
        <Button>Hey!</Button>
        <Button>Hello!</Button>
      </Card>
    </div>
  );
}

export default App;
