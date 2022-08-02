import React, { useState } from "react";
import { Box, Button , TextField , Alert } from '@mui/material';

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        <Box>
            <TextField
                id="username"
                label="Username"
                placeholder="Pick your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{mb:2}}
            />
            <TextField
                id="password"
                label="Password"
                placeholder="Pick your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{mb:2}}
                type="password"
            />
            <TextField
                id="password"
                placeholder="Confirm password..."
                label="Password Confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                sx={{mb:2}}
                type="password"
            />
        
            <Button variant="container" onClick={handleSubmit} sx={{color: "primary.main"}}>
                {isLoading ? "Loading..." : "Sign Up"}
            </Button>

            <Box>
                {errors.map((err) => (
                <Alert severity="error" key={err}>{err}</Alert>
                ))}
            </Box>
        </Box>
    );
}

export default SignUpForm;