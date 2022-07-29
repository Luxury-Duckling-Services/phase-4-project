import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Feed from "./Feed"
import Explore from "./Explore"
import Messaging from "./Messaging"
import Profile from "./Profile"

function App() {
  return (
    <>
      <NavBar />
        <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
