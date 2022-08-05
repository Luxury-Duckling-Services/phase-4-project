import * as React from 'react';
import { useState, useEffect } from "react";
import { Box, IconButton, TextField, Modal, Typography, List, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserCard from "./UserCard";

const modalStyle ={
  position: 'absolute',
  top:'50%',
  left: '50%',
  width: 700,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  border: '1px solid white',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4
};

function SearchBar({ currentUser, setFriendships }){
  const [userSearch, setUserSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(users => setUsers(users))
  }, [userSearch])

  const filterUsers = users.filter(user => {
    if (user.username.toLowerCase().startsWith(userSearch.toLowerCase()) && user.id !== currentUser.id) {
      return true
    }
    return false
  })

  function handleOpen() {
    setOpen(true)
  }   

  function handleClose() {
      setOpen(false);
      setUserSearch("")
  }

  return(
    <Box sx={{ flexGrow:1 }}>       
      <TextField placeholder="Search for user..." variant="standard" sx={{width: '85%', ml: 2}}
        value={userSearch}
        onChange={e => setUserSearch(e.target.value)}
      />
      <IconButton onClick={handleOpen} aria-label="search">
        <SearchIcon></SearchIcon>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography variant="h5">
              User Results
          </Typography>
    
          <List>
              {filterUsers.map(addedUser => {
                return <UserCard currentUser={currentUser} addedUser={addedUser} setFriendships={setFriendships} key={addedUser.id} />
              })}
          </List>
    
          <Button sx={{color:'white',  backgroundColor: '#01579B', borderColor: 'black'}} variant="contained" edge="end" onClick={handleClose}>
              Close
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}
    
export default SearchBar