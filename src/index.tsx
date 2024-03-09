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
import { createTheme, ThemeProvider } from "@mui/material";

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

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    laptop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      laptop: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
});

root.render(
  <AuthProvider {...oidcConfig}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </AuthProvider>,
);
