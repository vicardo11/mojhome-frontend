import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Finances from "./pages/finances/Finances";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/finances" Component={Finances} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
