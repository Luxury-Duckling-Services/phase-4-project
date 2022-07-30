import * as React from 'react';

import Box from '@mui/material/Box';

import UserPost from "./UserPost.js"

function Feed() {
    return (
        <Box
            display="flex"
            sx={{ flexDirection: 'column' }}
            justifyContent="center"
            alignItems="center"
        >
            <UserPost />
            <UserPost />
            <UserPost />
        </Box>
    )
}

export default Feed;