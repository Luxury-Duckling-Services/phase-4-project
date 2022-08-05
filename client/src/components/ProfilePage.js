import { useState, useEffect } from "react";
import { Avatar, Grid, Fab, Paper, Box, Button, Typography, Divider, List, ListItem, TextField, Snackbar } from '@mui/material'; 
import UserPost from "./Feed and Explore/UserPost";
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';

const paperStyle={
    borderRadius: '8px',
    m:2,
    p:4
}

function ProfilePage ({ friendships, user, setFriendships}) {
    const [posts, setPosts] = useState([]);
    const [editingMode , setEditingMode] = useState(false)
    const [openMessage, setOpenMessage] = useState(false);

    const initialEditInfo = {
        profile_picture_url: user.profile_picture_url,
        bio: user.bio
    }

    const [editInfo, setEditInfo] = useState(initialEditInfo)
    
    useEffect( ()=> {
        fetch("/posts")
        .then(r => r.json())
        .then(posts => {
            setPosts(posts.filter( (post) => {
                return post.user_id === user.id
            }))
        })
    }, [])

    function handleRemoveFriend(friend) {
        let friendshipToBeDeleted = { 
            id_one: friend.id, 
            id_two: user.id
        }

        console.log(friendshipToBeDeleted)
        console.log(friendships)

        // delete request to friendships
        
        fetch(`/friendships`, {
            method:"DELETE",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(friendshipToBeDeleted)
        })
        
        setFriendships(friendships.filter( oneFriend=>{
            return oneFriend.id !== friend.id
        }))
        
        //modify friendships state by filtering out that user 
    }

    function handleChange(e) {
        setEditInfo({
            ...editInfo,
            [e.target.id]: e.target.value
        })
    }

    function handleEdit() {
        setEditingMode(currentMode => !currentMode)
    }

    function handleSave() {
        //patch request
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editInfo)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(updatedUser => {
                    setEditingMode(false)
                    setEditInfo(initialEditInfo)
                    setOpenMessage(true);
                })
            }
        })
    }

    function handleCloseMessage(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpenMessage(false);
    }
    
    return (
        <Grid
            container
            spacing={3}
            alignItems="stretch"
        >
            <Grid item xs={3.25} >
                <Paper sx={paperStyle}>
                    <Box sx={{display:'flex', justifyContent: "space-between"}}>
                        <Typography variant="h4">My Info</Typography>
                            <Fab onClick={handleEdit} size="small" color="secondary" aria-label="edit" ><EditIcon /></Fab>
                    </Box>
                    <Divider sx={{mt:2, mb:2}}/>
                    
                    <List>
                        <ListItem sx={{justifyContent:'space-between'}}>
                            <Typography>Username: {user.username}</Typography>
                            <Avatar src={user.profile_picture_url}>{user.username[0]}</Avatar>
                        </ListItem>
                        
                        {editingMode ? 
                            <ListItem sx={{justifyContent:'space-between'}}>
                                <TextField
                                    label="Change Profile Picture"
                                    id="profile_picture_url"
                                    placeholder="Image Address" 
                                    variant="standard"
                                    value={editInfo.profile_picture_url}
                                    onChange={handleChange}
                                />
                            </ListItem>
                                : null}
                        
                        <ListItem>
                            <Typography>Bio: {user.bio}</Typography>
                        </ListItem>

                        {editingMode ? 
                            <ListItem sx={{justifyContent:'space-between'}}>
                                <TextField
                                    label="Change Bio"
                                    id="bio"
                                    placeholder="Bio" 
                                    variant="standard"
                                    value={editInfo.bio}
                                    onChange={handleChange}
                                />
                            </ListItem>
                                : null}
                        
                    </List>

                    <Button sx={{ml: "80%"}} variant="contained" onClick={() => window.location.reload()} ><RefreshIcon /></Button>

                    {editingMode ? <Button onClick={handleSave} variant="contained" >Save</Button> : null}
                    <Snackbar
                        open={openMessage}
                        autoHideDuration={3000}
                        onClose={handleCloseMessage}
                        message="Info Saved"
                    />
                </Paper>
            </Grid>

            <Grid item xs={5.5} justifyContent="center">
                <Paper sx={paperStyle} >
                    <Typography variant="h4">My Posts</Typography>
                    <Typography variant="h6">You have {posts.length} posts.</Typography>
                    <Box>
                        {posts.map( (post)=>{
                            return <UserPost key={post.id} post={post} user={user} />
                        })}
                    </Box>
                </Paper>
            </Grid>
            
            <Grid item xs={3.25}>
                <Paper sx={paperStyle}>
                    <Typography variant="h4">Friends</Typography>
                    <Divider sx={{mt:2, mb:2}}/>
                    <List>
                        {friendships.map(friend => {
                            return <ListItem sx={{justifyContent: 'space-between'}} key={friend.id}>
                                <Box sx={{display:'flex', alignItems: 'center'}}>
                                    <Avatar>{friend.username[0]}</Avatar>
                                    <Typography variant="h6" sx={{p:2}}> {friend.username} </Typography>
                                </Box>
                                <Button onClick={() => handleRemoveFriend(friend)} variant="contained">Remove</Button>
                            </ListItem>
                        })}
                    </List>
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default ProfilePage