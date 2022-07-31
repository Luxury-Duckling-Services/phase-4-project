import * as React from 'react';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import Container from '@mui/material/Container';

import SearchBar from "./SearchBar.js"
import HomeButton from "./HomeButton.js"
import ExploreButton from "./ExploreButton.js"
import NotificationsButton from "./NotificationsButton.js"
import MessagesButton from "./MessagesButton.js"
import UserButton from "./UserButton.js"

function NavBar() {

    return (
      <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
              
              <LibraryMusicIcon
                fontSize="large" 
                sx={{
                  mr: 1
                }}
              />
                
              <Typography
                variant="h5"
                component="a"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none'
                }}
              >
                Spotigram
              </Typography>

              <SearchBar />
              
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

              <UserButton />
 
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar