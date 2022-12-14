import React, { useState } from "react";
import { Box, Button , TextField , Alert } from '@mui/material';

function LoginForm({ onLogin, setFriendships }) {
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
        r.json().then((user) => {
          onLogin(user)
          setFriendships([ ...user.approvers , ...user.requesters ])
        })}
      else {
        r.json().then((err) => {
          setErrors(err.errors)
      })}
     });
  }

  return (
    <Box>
      <TextField
        id="username"
        label="Username"
        placeholder="Enter username..."
        value={username}
        fullWidth
        onChange={(e) => setUsername(e.target.value)}
        sx={{mb:2}}
      />
      <TextField
        id="password"
        placeholder="Enter password..."
        label="Password"
        value={password}
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
        sx={{mb:2}}
        type="password"
      />
    
      <Button variant="contained" onClick={handleSubmit} sx={{color: "white"}}>
        {isLoading ? "Loading..." : "Log In"}
      </Button>
      
      <Box>
        {errors.map( (err) => (
          <Alert sx={{mt: 2, mb:1}} severity="error" key={err}>{err}</Alert>
        ))}
      </Box>
    </Box>
  );
}

export default LoginForm;