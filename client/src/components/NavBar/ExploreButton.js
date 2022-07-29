import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ExploreIcon from '@mui/icons-material/Explore';

import { Link } from "react-router-dom";

function ExploreButton() {

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="home"
                color="inherit"
            >     
                <ExploreIcon />
            </IconButton>
        </Box>
    )
}

export default ExploreButton