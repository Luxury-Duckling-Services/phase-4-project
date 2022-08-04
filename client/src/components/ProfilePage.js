import { useState, useEffect } from "react";
import { Avatar, Grid, Paper, Box , Typography, Divider, List, ListItem } from '@mui/material';
import UserPost from "./Feed and Explore/UserPost";

const paperStyle={
    borderRadius: '8px',
    m:2,
    p:4
}

function ProfilePage ({ user }) {
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
                    <Box>
                        {posts.map( (post)=>{
                            return <UserPost key={post.id} post={post} user={user} />
                        })}
                    </Box>
                </Paper>
            </Grid>
            
            <Grid item xs={3.25}>
                <Paper sx={paperStyle}>
                    <Typography variant="h4">You have {posts.length} posts.</Typography>
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default ProfilePage