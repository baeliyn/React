import React from "react";
import UserContext from "../context/userContext";

function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = React.useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <>
      <div>Login</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="text"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </>
  );
}

export default Login;
