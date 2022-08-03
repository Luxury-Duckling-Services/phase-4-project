import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchBar from "./SearchBar.js"
import HomeButton from "./HomeButton.js"
import ExploreButton from "./ExploreButton.js"
//import NotificationsButton from "./NotificationsButton.js"
import MessagesButton from "./MessagesButton.js"
import UserButton from "./UserButton.js"

function NavBar({ user, setUser, setFriendships }) {

    return (
      <AppBar position="sticky" sx={{}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton href="/">
                <LibraryMusicIcon fontSize="large"
                sx={{ mr: 1, color: 'black' }}
                />
              </IconButton>
              
                
              <Typography variant="h5" component="a" href="/"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >
                Spotigram
              </Typography>

              <SearchBar currentUser={user} setFriendships={setFriendships} />
              
              <Link to="/" style={{ color: 'inherit' }}>
                <HomeButton />
              </Link>

              <Link to="/explore" style={{ color: 'inherit' }}>
                <ExploreButton />
              </Link>

              <Link to="/messaging" style={{ color: 'inherit' }}>
                <MessagesButton />
              </Link>

              {/* <NotificationsButton /> */}

              <UserButton setUser={setUser} />
 
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar