import { Link } from "react-router-dom"
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { SvgIcon } from '@mui/material';

function NavBar() {
    return (
        <AppBar>
            <CssBaseline />
            <Typography>
                Project
            </Typography>
            <Toolbar>
                
                <Link to="/">
                    Feed
                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar