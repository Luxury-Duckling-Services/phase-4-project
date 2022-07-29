import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MessagesButton() {

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="show 4 new messages"
                color="inherit"
            >
                <Badge
                    badgeContent={4}
                    color="error"
                >
                    <MailIcon />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default MessagesButton