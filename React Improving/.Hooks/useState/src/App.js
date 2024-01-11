import React from "react";
import Todo from "./todo";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [name, setName] = React.useState("");

  function handleSumbit(e) {
    e.preventDefault();

    setTodos((prev) => {
      return [...prev, newTodo()];
    });

    function newTodo() {
      return { id: Date.now(), name: name, complete: false };
    }

    setName("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
