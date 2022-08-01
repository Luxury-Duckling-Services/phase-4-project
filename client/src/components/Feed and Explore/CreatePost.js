import Box from '@mui/material/Box';
import { Button, Modal, IconButton, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useParams } from "react-router-dom"

const modalStyle ={
    position: 'absolute',
    top:'50%',
    left: '50%',
    width: 600,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid white',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4
};

function CreatePost({ onSubmit }) { 
    const [caption, setCaption] = useState("");
    const [chosenSong, setChoseSong] = useState({});
    const [trackQuery, setTrackQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [songs, setSongs] = useState([]);

    const params = useParams();

    function handleChange(e) {
        setCaption(e.target.value);
    }

    function handleInput(e) {
        setTrackQuery(e.target.value);
    }

    // User enters pop up window to choose song
    function handleOpen() {
        // setOpen(true);
        fetch(`/search/${trackQuery}`)
            .then(r => r.json() )
            .then(track => console.log(track))
        // perform a fetch GET request here to get all songs that match query parameter, "trackQuery"
        // when user adds a song, assign that song object from the backend to the "chosenSong" state 
        // once the "chosenSong" state contains information, we now have a song input from the user
    }

    // User exits pop up window 
    function handleClose() {
        setOpen(false);
    }

    // Once all information (caption and song) are chose, user submits and posts to the feed
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(caption)
        setCaption("");
    }

    return (
        <Box sx={{ 
            width: 600,
            border: '1px solid black',
            borderRadius: '8px'
        }}>
            <Box sx={{p: 2}}>
                <Typography variant="h5" sx={{mb:1}}>
                    Create Post
                </Typography>
                <form>
                    <TextField
                        id="caption"
                        placeholder="Insert Caption"
                        multiline
                        maxRows={4}
                        fullWidth
                        value={caption}
                        onChange={handleChange}
                        sx={{mb:2}}
                    />

                    <TextField
                        id="search-bar"
                        onInput={handleInput}
                        label="Search for a Track"
                        placeholder="Search..."
                        value={trackQuery}
                        size="small"
                        sx={{width: 515, mr:1}}
                    />
                    <IconButton onClick={handleOpen} aria-label="search">
                        <SearchIcon style={{fill: "primary.light"}} />
                    </IconButton>

                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box sx={modalStyle}>
                            <Typography variant="h5">
                                Track Results
                            </Typography>
                            <List>
                                <ListItem>
                                    This is a Song
                                    <Button variant="contained" edge="end">
                                        Add Song
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    This is a Song
                                    <Button variant="contained" edge="end">
                                        Add Song
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    This is a Song
                                    <Button variant="contained" edge="end">
                                        Add Song
                                    </Button>
                                </ListItem>
                            </List>
                        </Box>
                    </Modal>

                    {Object.keys(chosenSong).length === 0 ? <Box>No song chosen yet</Box> : 
                        <Box>
                            <Typography>
                                {chosenSong.name}
                            </Typography>
                        </Box>
                    }
                    
                    <Button onClick={handleSubmit} variant="contained" sx={{mt:2, mb: 2, float: "right"}}>
                        Submit
                    </Button>
                </form>

                
            </Box>
        </Box>
    )
}

export default CreatePost