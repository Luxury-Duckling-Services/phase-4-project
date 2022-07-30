import * as React from 'react';

import Box from '@mui/material/Box';

import UserPost from "./UserPost.js"

function Explore() {
    return (
        <Box
            display="flex"
            sx={{ flexDirection: 'column' }}
            justifyContent="center"
            alignItems="center"
        >
            <UserPost />
        </Box>
    )
}

export default Explore;