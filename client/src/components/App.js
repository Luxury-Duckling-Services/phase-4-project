import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "./NavBar/NavBar"
import Feed from "./Feed and Explore/Feed"
import Explore from "./Feed and Explore/Explore"
import Messaging from "./Messaging"
import Login from "./Login/Login"
import ProfilePage from "./ProfilePage"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#38b3dc",
      light: "#abdef0",
      dark: "#00a4d7"
    },
    secondary: {
      main: "#e6e9fa"
      
    }
  }
})

function App() {
  const [user, setUser] = useState(null);
  const [friendships, setFriendships] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json()
          .then(user => {
            console.log(user)
            setUser(user)
            setFriendships([ ...user.approvers , ...user.requesters ])
            console.log([ ...user.approvers , ...user.requesters ].map( friend => friend.id))
          })
        }
      })
  }, []);

  if (!user) return <Login setFriendships={setFriendships} onLogin={setUser}/>;

  return (
    <ThemeProvider theme={theme} >
      <NavBar user={user} setUser={setUser} setFriendships={setFriendships}/>
      <Routes>
        <Route path="/" element={<Feed user={user} friendships={friendships} />} />
        <Route path="/explore" element={<Explore user={user} />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/profile" element={<ProfilePage friendships={friendships} setFriendships={setFriendships} user={user}/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
