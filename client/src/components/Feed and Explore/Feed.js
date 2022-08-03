import * as React from 'react';
import { useState , useEffect } from 'react';
import { Avatar, Box, Grid, Paper, Typography, List, ListItem, Divider } from '@mui/material';
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
        .then(posts => {
            console.log(posts)
            setPosts(posts)
        })
    } , [])


    function onSubmit(caption, chosenSong) {
        console.log(chosenSong)

        let formData = { 
            preview_url: chosenSong.preview_url, 
            song: chosenSong.name, 
            song_id: chosenSong.id, 
            artist: chosenSong.artists[0].name, 
            user_id: user.id,
            username: user.username,
            caption: caption,
            image: chosenSong.image
        }

        fetch("/posts",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newPost => { 
            setPosts(currentPosts => [newPost , ...currentPosts])
        }
        )
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
                        {user.approvers.map(friend => {
                            return <ListItem sx={{justifyContent: 'space-between'}}>
                                <Box sx={{display:'flex', alignItems: 'center'}}>
                                    <Avatar>{friend.username[0]}</Avatar>
                                    <Typography variant="h6" sx={{p:2}}> {friend.username} </Typography>
                                </Box> 
                            </ListItem>
                        })}
                    </List>
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default Feed;