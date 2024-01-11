import React from "react";

export default function todo({ todo }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "green" : "yellow" }}>
        {todo.name}
      </span>
      <button>Toggle</button>
      <button>Delete</button>
    </div>
  );
}
