import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/_index.scss";
import { AuthProvider } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts";
import reducer from "./store/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const oidcConfig = {
  authority: "http://localhost:8100/auth/realms/mojhome",
  client_id: "mojhome-frontend",
  redirect_uri: "http://localhost:3000/",
  post_logout_redirect_uri: "http://localhost:3000/",
  scope: "microprofile-jwt",
  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),
  automaticSilentRenew: true,
};

const store = configureStore({ reducer });

root.render(
  <Provider store={store}>
    <AuthProvider {...oidcConfig}>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthProvider>
  </Provider>,
);
