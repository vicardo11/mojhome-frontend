import { Alert, Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const auth = getAuth();

  function handleSubmit() {
    console.log("Handling submit");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser?.getIdToken().then((token) => {
          setCookie("token", token, { maxAge: 3600 });
        });
        setShouldRedirect(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  if (shouldRedirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Box sx={{ width: "30%", mx: "auto", mt: "200px" }}>
        <Alert sx={{ mb: 3, display: errorMessage || "none" }} severity="error">
          {errorMessage}
        </Alert>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <FormControl fullWidth>
                <TextField onChange={handleEmailChange} name="email" required label="Email" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <TextField
                  onChange={handlePasswordChange}
                  required
                  label="Password"
                  name="password"
                  type="password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ pt: 5, display: "flex", justifyContent: "flex-end", gap: 3 }}>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default LoginPage;
