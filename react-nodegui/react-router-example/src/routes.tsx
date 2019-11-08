import { Route } from "react-router";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";

export default function AppRoutes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </>
  );
}
