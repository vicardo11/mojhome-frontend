import { useEffect, useRef } from "react";
import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

const LogoutPage = () => {
  // Without initialized auth.signoutPopup() will be called twice in dev mode (StrictMode issue)
  const initialized = useRef(false);
  const auth = useAuth();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      auth.signoutRedirect();
    }
  }, [auth]);

  return <Navigate to={"/"} />;
};

export default LogoutPage;
