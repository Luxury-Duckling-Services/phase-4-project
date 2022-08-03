import * as React from 'react';
import { useState , useEffect } from 'react';
import { Box, Grid, Paper, Typography} from '@mui/material';
import UserPost from "./UserPost.js"

const paperStyle={
    borderRadius: '8px',
    m:2,
    p:4
}

function Explore({ user }) {
    const [posts, setPosts] = useState([]);
    
    useEffect( ()=> {
        fetch("/posts")
        .then(r => r.json())
        .then(posts => {
            setPosts(posts)
        })
    } , [])

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
                    <Box>
                        {posts.map( (post)=>{
                            return <UserPost key={post.id} post={post} user={user} />
                        })}
                    </Box>
                </Paper>
            </Grid>
            
            <Grid item xs={3.25}>
                <Paper sx={paperStyle}>
                    <Typography variant="h4">Explore all posts from the platfrom!</Typography>
                </Paper>
            </Grid>
        
        </Grid>
    )
}

export default Explore;