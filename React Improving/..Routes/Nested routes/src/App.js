import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import First from "./components/first";
import Second from "./components/second";
import Params from "./components/params";

import "./server";
import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import Layout from "./components/layout";

function App() {
  const [基本, 基本的な] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        基本的な(data.vans);
      });
  }, []);

  const array = 基本.map((van) => {
    return (
      <Link key={van.id} to={`/vans/${van.id}`}>
        <div key={van.id}>{van.name}</div>
      </Link>
    );
  });

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home array={array} />} />
          <Route path="/vans/:id" element={<Params />} />
        </Route>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
      <Link to="/first">first</Link>
      <br />
      <Link to="/second">second</Link>
      <br />
      <Link to="/">home</Link>
    </div>
  );
}

export default App;
