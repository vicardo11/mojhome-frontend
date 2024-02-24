import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CLayout from "./components/layout/CLayout";
import { NAVBAR_DATA } from "./constants/NavbarData";
import { ROUTES } from "./constants/Routes";

function App() {
  return (
    <BrowserRouter>
      <CLayout navbarItems={NAVBAR_DATA}>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.id} path={route.path} Component={route.component} />
          ))}
        </Routes>
      </CLayout>
    </BrowserRouter>
  );
}

export default App;
