import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dashboard/index";
import Permissions from "./components/Permissions/Permissions";
import "bootstrap/dist/css/bootstrap.min.css";

// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Permissions" element={<Permissions />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
