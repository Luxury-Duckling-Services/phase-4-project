import * as React from 'react';
import { useState , useEffect } from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, Divider } from '@mui/material';
import UserPost from "./UserPost.js"
import CreatePost from "./CreatePost.js"

const paperStyle={
    borderRadius: '8px',
    m:2,
    p:4
}

function Feed({ user }) {
    const [posts, setPosts] = useState([]);
    
    useEffect( ()=> {
        fetch("/posts")
        .then(r => r.json())
        .then(array => {
            setPosts(array)
        })
    } , [])


    function onSubmit(caption, chosenSong) {
        //POST request to /posts and create a new post in the backend 
        fetch("/posts",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        })
        //then add a new post to our posts state in frontend
    }

    return (
        <Grid
            container
            spacing={3}
            alignItems="stretch"
        >
            <Grid item xs={3.25} >
               
            </Grid>

            <Grid item xs={5.5} justifyContent="center">
                <Paper sx={paperStyle} >
                    <CreatePost onSubmit={onSubmit}/>
                    <Box>
                        {posts.map( (post)=>{
                            return <UserPost key={post.id} post={post}/>
                        })}
                    </Box>
                </Paper>
            </Grid>
            
            <Grid item xs={3.25}>
                <Paper sx={paperStyle}>
                    <Typography variant="h4">Friends</Typography>
                    <Divider sx={{mt:2, mb:2}}/>
                    <List>
                        {user.approvers.map(friend => {
                            <ListItem key={friend.id}>{friend.username}</ListItem>
                        })}
                    </List>
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default Feed;