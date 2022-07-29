import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

function HomeButton() {

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="home"
                color="inherit"
            >
                <HomeIcon />
            </IconButton>
        </Box>
    )
}

export default HomeButton