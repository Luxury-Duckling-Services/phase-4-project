import { useState, useEffect } from "react";
import { Avatar, Grid, Paper, Box, Button, Typography, Divider, List, ListItem } from '@mui/material';
import UserPost from "./Feed and Explore/UserPost";

const paperStyle={
    borderRadius: '8px',
    m:2,
    p:4
}

function ProfilePage ({ friendships, user, setFriendships}) {
    const [posts, setPosts] = useState([]);
    
    useEffect( ()=> {
        fetch("/posts")
        .then(r => r.json())
        .then(posts => {
            setPosts(posts.filter( (post) => {
                return post.user_id === user.id
            }))
        })
    }, [])

    function handleRemoveFriend() {
        //delete request to friendships
        //modify friendships state by filtering out that user 
    }
    
    
    return (
        <Grid
            container
            spacing={3}
            alignItems="stretch"
        >
            <Grid item xs={3.25} >
                <Paper sx={paperStyle}>
                    <Typography variant="h4">My Info</Typography>
                    <Divider sx={{mt:2, mb:2}}/>
                    <List>
                        <ListItem sx={{justifyContent:'space-between'}}>
                            <Typography>{user.username}</Typography>
                            <Avatar src={user.profile_picture_url}></Avatar>
                        </ListItem>
                        
                        <ListItem>
                            <Typography>{user.bio}</Typography>
                        </ListItem>
                    </List>
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
                                <Button onClick={handleRemoveFriend} variant="contained">Remove</Button>
                            </ListItem>
                        })}
                    </List>
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default ProfilePage