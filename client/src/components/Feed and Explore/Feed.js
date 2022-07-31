import * as React from 'react';

import Box from '@mui/material/Box';

import UserPost from "./UserPost.js"
import CreatePost from "./CreatePost.js"

function Feed() {
    return (
        <Box
            display="flex"
            sx={{ flexDirection: 'column' }}
            justifyContent="center"
            alignItems="center"
        >

            <CreatePost />
            
            <Box>
                <UserPost />
                <UserPost />
                <UserPost />
            </Box>
            
        </Box>
    )
}

export default Feed;