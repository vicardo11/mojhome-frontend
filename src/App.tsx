import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      {/*<Sidebar />*/}
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
