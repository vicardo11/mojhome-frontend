import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FinancesPage from "./pages/finances/FinancesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/finances" Component={FinancesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
