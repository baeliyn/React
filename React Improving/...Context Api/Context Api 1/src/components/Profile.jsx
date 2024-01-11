import React from "react";
import UserContext from "../context/userContext";

function Login(props) {
  const { user } = React.useContext(UserContext);
  if (!user) return <h1>Not logged in</h1>;
  return (
    <>
      <div>Profile: {user.username}</div>
    </>
  );
}

export default Login;
