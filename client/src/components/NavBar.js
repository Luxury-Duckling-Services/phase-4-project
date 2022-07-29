import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom"

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