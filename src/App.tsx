import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FinancesPage from "./pages/finances/FinancesPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/finances" Component={FinancesPage} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
