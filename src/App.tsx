import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Finances from "./pages/Finances";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/finances" Component={Finances} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
