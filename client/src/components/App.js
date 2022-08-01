import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Feed from "./Feed and Explore/Feed"
import Explore from "./Feed and Explore/Explore"
import Messaging from "./Messaging"
import Profile from "./Profile"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#38b3dc",
      light: "#abdef0",
      dark: "#00a4d7"
    },
    secondary: {
      main: "#f5f5f5"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
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
