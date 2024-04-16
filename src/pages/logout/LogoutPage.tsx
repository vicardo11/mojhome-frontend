import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useCookies } from "react-cookie";

const LogoutPage = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const auth = getAuth();

  useEffect(() => {
    auth.signOut().then(() => {
      setCookie("token", "", { maxAge: 0 });
    });
  });

  return <Navigate to={"/"} />;
};

export default LogoutPage;
