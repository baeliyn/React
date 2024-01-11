import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>THIS IS THE LAYOUT PAGE</h1>
      <Outlet />
    </>
  );
}
