import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import UserPost from "./UserPost.js"
import CreatePost from "./CreatePost.js"

function Feed() {
    const [posts, setPosts] = useState([]);

    function onSubmit(caption) {
        
    }

    return (
        <Box
            display="flex"
            sx={{ flexDirection: 'column', mt: 4 }}
            justifyContent="center"
            alignItems="center"
        >

            <CreatePost onSubmit={onSubmit}/>
            <Box>
                <UserPost />
            </Box>
            
        </Box>
    )
}

export default Feed;