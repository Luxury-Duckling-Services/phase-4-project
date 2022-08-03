import Box from '@mui/material/Box';
import { Button, Modal, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import AudioPlayer from 'material-ui-audio-player';

const modalStyle ={
    position: 'absolute',
    top:'50%',
    left: '50%',
    width: 450,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid white',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4
};

function CreatePost({ onSubmit }) { 
    const [caption, setCaption] = useState("");
    const [chosenSong, setChosenSong] = useState({});
    const [trackQuery, setTrackQuery] = useState("");
    const [open, setOpen] = useState(false);

    function handleChange(e) {
        setCaption(e.target.value);
    }

    function handleInput(e) {
        setTrackQuery(e.target.value);
    }

    // User enters pop up window to choose song
    function handleOpen() {
        fetch(`/search/${trackQuery}`)
            .then(r => r.json() )
            .then(track => {
                setOpen(true)
                setChosenSong(track)
            }
        )
    }

    // User exits pop up window 
    function handleClose() {
        setOpen(false);
        setTrackQuery("");
    }

    function handleRemoval() {
        setChosenSong({})
    }

    // Once all information (caption and song) are chose, user submits and posts to the feed
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(caption, chosenSong)
        setCaption("");
    }

    return (
        <Box sx={{ 
            m: 'auto',
            border: '1px solid #e6e9fa',
            backgroundColor:'secondary.main',
            borderRadius: '12px',
            
        }}>
            
            <Typography variant="h4" sx={{m:2}}>
                Create Post
            </Typography>
            
            <TextField
                id="caption"
                label="Caption"
                placeholder="Insert Caption"
                multiline
                maxRows={4}
                value={caption}
                onChange={handleChange}
                sx={{width: '30vw', m:2}}
            />
            
            <TextField
                id="search-bar"
                label="Search"
                onInput={handleInput}
                placeholder="Search..."
                value={trackQuery}
                size="small"
                fullWidth
                sx={{width:'25vw', m:2}}
            />
            <IconButton  onClick={handleOpen} aria-label="search">
                <SearchIcon sx={{m:2, fill: "primary.light"}} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <Typography variant="h5">
                        Track Results
                    </Typography>
                    
                    {Object.keys(chosenSong).length === 0 ? <Box></Box> :
                        <Box>
                            <Typography variant="h5">
                                {chosenSong.name} by {chosenSong.artists[0].name}
                            </Typography>
                            <AudioPlayer src={chosenSong.preview_url}/>
                        </Box>
                    }
                    
                    <Button variant="contained" edge="end" onClick={handleClose}>
                        Add Song
                    </Button>
                </Box>
            </Modal>

            {Object.keys(chosenSong).length === 0 ? <Box sx={{m:2}}>No song chosen yet!</Box> : 
                <Box sx={{m:2}}>
                    <Typography>
                        Added {chosenSong.name} by {chosenSong.artists[0].name}
                    </Typography>
                    <Button sx={{mt:2}} variant="contained" onClick={handleRemoval}>
                        Remove Song
                    </Button>
                </Box>
            }
        
            <Button onClick={handleSubmit} variant="contained" sx={{backgroundColor:"primary.main", m: 2}}>
                Submit
            </Button>

        </Box>
    )
}

export default CreatePost