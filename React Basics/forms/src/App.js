import React from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    surname: "",
    comment: "comment",
    isFriendly: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function kakkoii(event) {
    event.preventDefault()
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={kakkoii}>
        <input
          type="text"
          placeholder="text input"
          onChange={handleChange}
          name="firstname"
          value={formData.firstname}
        />

        <input
          type="text"
          placeholder="text input"
          onChange={handleChange}
          name="surname"
          value={formData.surname}
        />

        <textarea
          value={formData.comment}
          placeholder="comments"
          onChange={handleChange}
          name="comments"
        />

        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
