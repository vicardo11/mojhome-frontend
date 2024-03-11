import React, { useEffect, useRef } from "react";
import { useAuth } from "react-oidc-context";
import { useLocation } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  // Without initialized auth.signinPopup() will be called twice in dev mode (StrictMode issue)
  const initialized = useRef(false);
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    // If isn't authenticated and authContext has been loaded - redirect to login page
    if (!auth.isAuthenticated && !auth.isLoading && !initialized.current) {
      initialized.current = true;
      // auth.signinPopup();
      auth.signinRedirect({
        redirect_uri: "http://localhost:3000/" + location.pathname,
      });
    }
  }, [auth, auth.isAuthenticated, auth.isLoading, location.pathname]);

  if (auth.isAuthenticated) {
    return <Component />;
  } else {
    return null;
  }
};

export default PrivateRoute;
