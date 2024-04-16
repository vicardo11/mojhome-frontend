import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/_index.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_VERCEL_API_KEY,
  authDomain: process.env.REACT_APP_VERCEL_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_VERCEL_PROJECT_ID,
  storageBucket: process.env.REACT_APP_VERCEL_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_VERCEL_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_VERCEL_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export a reference to the service
export const auth = getAuth(app);

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
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </CookiesProvider>,
);
