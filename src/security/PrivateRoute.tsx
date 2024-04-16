import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const location = useLocation();
  const [cookies] = useCookies(["token"]);

  if (cookies.token) {
    return <Component />;
  } else {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
};

export default PrivateRoute;
