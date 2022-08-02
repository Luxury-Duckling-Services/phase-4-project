import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "./NavBar/NavBar"
import Feed from "./Feed and Explore/Feed"
import Explore from "./Feed and Explore/Explore"
import Messaging from "./Messaging"
import Profile from "./Profile"
import Login from "./Login/Login"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#38b3dc",
      light: "#abdef0",
      dark: "#00a4d7"
    }
  }
})

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json().then(user => setUser(user))
        }
      })
  }, []);

  if (!user) return <Login onLogin={setUser}/>;

  return (
    <ThemeProvider theme={theme} >
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
