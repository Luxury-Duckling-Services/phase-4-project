import { Box, Avatar, Typography, Button, ListItem, Alert } from '@mui/material';
import { useState } from "react";

function UserCard({ currentUser , addedUser, setFriendships }) {
    const [added, setAdded] = useState(false)
    const [currentFriendship, setCurrentFriendship] = useState({});
    const [error, setError] = useState("")

    function handleAddFriend() {
        //Post request to Friendship and create a friendship between current user and added user
        if (!added) {
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
            .then(r => {
                if (r.ok) {
                    r.json().then(friendship => {
                        setAdded(true)
                        setFriendships(currentFriendships => [...currentFriendships, addedUser])
                        setCurrentFriendship(friendship)

                        if (added) {

                        }
                        })
                }
                else {
                    r.json().then(err => setError(err.errors[0]))
                }
            })
        }  

        else if (added) {
            fetch(`/friendships/${currentFriendship.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type':'application/json'
                }
            })
            .then(deleted => {
                setAdded(false)
                setFriendships(currentFriendships => currentFriendships.filter(user => user.id !== deleted.approver_id))
                setCurrentFriendship({})
                console.log("done")
            })
        }
    }

    return (
        <ListItem sx={{justifyContent: 'space-between'}}>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <Avatar>{addedUser.username[0]}</Avatar>
                <Typography variant="h6" sx={{p:2}}> {addedUser.username} </Typography>
            </Box> 
            {error.length === 0 ? <></> : <Alert severity="error" >{error}</Alert>}
            <Button variant="contained" onClick={handleAddFriend} >{added ? "Remove" : "Add Friend"}</Button>
        </ListItem>
    )
}

export default UserCard