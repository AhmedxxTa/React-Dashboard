import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Expenses from "./pages/Expenses/Expenses";

function App() {
  return (
    <div>
      <Sidebar />
      <Expenses />
    </div>
  );
}

export default App;
