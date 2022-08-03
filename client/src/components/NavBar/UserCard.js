import { Box, Avatar, Typography, Button, ListItem } from '@mui/material';
import { useState } from "react";

function UserCard({ currentUser , addedUser }) {
    const [added, setAdded] = useState(false)

    function handleAddFriend() {
        //Post request to Friendship and create a friendship between current user and added user
        fetch("/friendships", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                requester_id: currentUser.id,
                approver_id: addedUser.id
            })
        })
        .then(r => r.json())
        .then(friendship => {
            setAdded(true)
        }) 
    }

    return (
        <ListItem sx={{justifyContent: 'space-between'}}>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <Avatar>{addedUser.username[0]}</Avatar>
                <Typography variant="h6" sx={{p:2}}> {addedUser.username} </Typography>
            </Box> 
            
            <Button variant="contained" onClick={handleAddFriend} >{added ? "Added" : "Add Friend"}</Button>
        </ListItem>
    )
}

export default UserCard