import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import React, { useState } from "react";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Typography, Divider, Box, Button, Grid, Paper } from '@mui/material';

const paperStyle={
    padding:'30px 20px',
    width:300, 
    margin:"20px auto",
    position: 'absolute',
    top:'38%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

function Login({ onLogin }) {
    
    const [showLogin, setShowLogin] = useState(true);
    
    return (
        <Grid>
            <Paper elvation={5} style={paperStyle}>
                <Grid align = 'center'>
                    <LibraryMusicIcon fontSize="large"
                    sx={{ mr: 1, color: 'primary.main' }}
                    />
            
                    <Typography variant="h5"
                        sx={{
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        textDecoration: 'none',
                        color: 'black'
                        }}
                    >
                        Spotigram
                    </Typography>
            
                    {showLogin ? (
                    <Box sx={{m:2}}>
                        <LoginForm onLogin={onLogin} />
                        <Divider sx={{mt: 2, mb: 2}} />
                        <Typography variant="h7">
                            Don't have an account?
                            <Button variant="contained" sx={{color: "white", mt:2}} onClick={() => setShowLogin(false)}>
                                Sign Up Instead
                            </Button>
                        </Typography>
                    </Box>
                    ) : (
                    <Box sx={{m:2}}>
                        <SignUpForm onLogin={onLogin} />
                        <Divider sx={{mt: 2, mb: 2}}/>
                        <Typography variant="h7">
                            Already have an account?
                            <Button variant="contained" sx={{color: "white", mt:2}} onClick={() => setShowLogin(true)}>
                                Log In Instead
                            </Button>
                        </Typography>
                    </Box>
                )}
                </Grid>
        </Paper>
    </Grid>
    )
}

export default Login