import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

function UserButton() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account Options">
                <IconButton
                    sx={{ p: 2 }}
                    onClick={handleOpenUserMenu}
                >
                    <Avatar alt="" src="" />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                sx={{
                    mt: '50px',
                    ml: "20px"
                }}
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem key={"profile"}>
                    <Typography textAlign="center">My Profile</Typography>
                </MenuItem>

                <MenuItem key={"posts"}>
                    <Typography textAlign="center">My Posts</Typography>
                </MenuItem>

                <MenuItem key={"friends"}>
                    <Typography textAlign="center">My Friends</Typography>           
                </MenuItem>

                <MenuItem key={"logout"}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default UserButton;