import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FinancesPage from "./pages/finances/FinancesPage";
import CLayout from "./components/layout/CLayout";

function App() {
  return (
    <BrowserRouter>
      <CLayout>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/finances" Component={FinancesPage} />
        </Routes>
      </CLayout>
    </BrowserRouter>
  );
}

export default App;
