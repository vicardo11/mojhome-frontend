import { BrowserRouter, Route, Routes } from "react-router-dom";
import CLayout from "./components/layout/CLayout";
import { NAVBAR_DATA } from "./constants/NavbarData";
import { ROUTES } from "./constants/Routes";
import PrivateRoute from "./security/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.filter((route) => !route.private).map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Routes>
        {ROUTES.filter((route) => route.private).map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <PrivateRoute
                component={() => (
                  <CLayout navbarItems={NAVBAR_DATA}>
                    <route.component />
                  </CLayout>
                )}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
