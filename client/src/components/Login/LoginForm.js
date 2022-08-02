import React, { useState } from "react";
import { Box, Typography, Button , TextField , Alert } from '@mui/material';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{mb:2}}
      />
      <TextField
        id="password"
        placeholder="Enter password..."
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{mb:2}}
        type="password"
      />
    
      <Button variant="contained" onClick={handleSubmit} sx={{color: "white"}}>
        {isLoading ? "Loading..." : "Log In"}
      </Button>
      
      <Typography>
        {errors.map((err) => (
          <Alert key={err}>{err}</Alert>
        ))}
      </Typography>
    </Box>
  );
}

export default LoginForm;