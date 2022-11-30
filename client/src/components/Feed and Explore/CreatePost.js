import Box from '@mui/material/Box';
import { Button, Modal, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import AudioPlayer from 'material-ui-audio-player';

// const modalStyle ={
//     position: 'absolute',
//     top:'50%',
//     left: '50%',
//     width: 450,
//     transform: 'translate(-50%, -50%)',
//     bgcolor: 'white',
//     border: '1px solid white',
//     borderRadius: '8px',
//     boxShadow: 24,
//     p: 4
// };

// function CreatePost({ onSubmit }) { 
//     const [caption, setCaption] = useState("");
//     const [chosenSong, setChosenSong] = useState({});
//     const [trackQuery, setTrackQuery] = useState("");
//     const [open, setOpen] = useState(false);

//     function handleChange(e) {
//         setCaption(e.target.value);
//     }

//     function handleInput(e) {
//         setTrackQuery(e.target.value);
//     }

//     // User enters pop up window to choose song
//     function handleOpen() {
//         fetch(`/search/${trackQuery}`)
//             .then(r => r.json() )
//             .then(track => {
//                 setOpen(true)
//                 setChosenSong(track)
//             }
//         )
//     }

//     // User exits pop up window 
//     function handleClose() {
//         setOpen(false);
//         setTrackQuery("");
//     }

//     function handleRemoval() {
//         setChosenSong({})
//     }

//     // Once all information (caption and song) are chose, user submits and posts to the feed
//     function handleSubmit(e) {
//         e.preventDefault();
//         onSubmit(caption, chosenSong)
//         setCaption("");
//         setChosenSong({})
//         setTrackQuery("")
//     }

//     return (
//         <Box sx={{ 
//             m: 'auto',
//             border: '2px solid #00a4d7',
//             backgroundColor:'white',
//             borderRadius: '12px',
//             p:2
//         }}>
            
//             <Typography variant="h4" sx={{m:2}}>
//                  Create Post
//             </Typography>
            
//             <TextField
//                 id="caption"
//                 label="Insert Caption"
//                 placeholder="Insert Caption"
//                 multiline
//                 maxRows={4}
//                 value={caption}
//                 onChange={handleChange}
//                 sx={{width: '30vw', m:2}}
//             />
            
//             <TextField
//                 id="search-bar"
//                 label="Search for a Song"
//                 onInput={handleInput}
//                 placeholder="Search..."
//                 value={trackQuery}
//                 size="small"
//                 fullWidth
//                 sx={{width:'25vw', m:2}}
//             />
//             <IconButton disabled={trackQuery.length === 0} onClick={handleOpen} aria-label="search">
//                 <SearchIcon sx={{m:2, fill: "primary.light"}} />
//             </IconButton>

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//             >
//                 <Box sx={modalStyle}>
//                     <Typography variant="h5">
//                         Track Results
//                     </Typography>
                    
//                     {Object.keys(chosenSong).length === 0 ? <Box></Box> :
//                         <Box>
//                             <Typography variant="h5">
//                                 {chosenSong.name} by {chosenSong.artists[0].name}
//                             </Typography>
//                             <AudioPlayer src={chosenSong.preview_url}/>
//                         </Box>
//                     }
                    
//                     <Button variant="contained" edge="end" onClick={handleClose}>
//                         Add Song
//                     </Button>
//                 </Box>
//             </Modal>

//             {Object.keys(chosenSong).length === 0 ? <Box sx={{m:2}}>No song chosen yet!</Box> : 
//                 <Box sx={{m:2}}>
//                     <Typography>
//                         Added {chosenSong.name} by {chosenSong.artists[0].name}
//                     </Typography>
//                     <Button sx={{mt:2}} variant="contained" onClick={handleRemoval}>
//                         Remove Song
//                     </Button>
//                 </Box>
//             }
        
//             <Button disabled={caption.length === 0 || Object.keys(chosenSong).length === 0} onClick={handleSubmit} variant="contained" sx={{backgroundColor:"primary.main", m: 2}}>
//                 Submit
//             </Button>

//         </Box>
//     )
// }
const modalStyle ={
    position: 'absolute',
    top:'50%',
    left: '50%',
    width: 550,
    transform: 'translate(-50%, -50%)',
    bgcolor: '#EEEEEE',
    border: '1px solid white',
    borderRadius: '5px',
    boxShadow: 24,
    p: 5
    
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
        setChosenSong({})
        setTrackQuery("")
    }

    return (
        <Box sx={{ 
            m: 'auto',
            border: '2px solid #EEEEEE',
            backgroundColor:'white',
            borderRadius: '12px',
            p:2,
            mb: 2
        }}>
            
            <Typography textAlign='center'variant="h4" sx={{m:2}}>
                 Create Post
            </Typography>
            
            <TextField
                id="caption"
                label="Insert Caption"
                placeholder="Insert Caption"
                multiline
                maxRows={4}
                value={caption}
                onChange={handleChange}
                sx={{width: '30vw', m:2}}
            />
            
            <TextField
                id="search-bar"
                label="Search for a Song"
                onInput={handleInput}
                placeholder="Search..."
                value={trackQuery}
                size="small"
                fullWidth
                sx={{width:'25vw', m:2}}
            />
            <IconButton disabled={trackQuery.length === 0} onClick={handleOpen} aria-label="search">
                <SearchIcon sx={{m:2, fill: "primary.light"}} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <Typography 
                    align="center"
                    sx={{p:1}}
                    variant="h5">
                        Track Results
                    </Typography>
                    
                    {Object.keys(chosenSong).length === 0 ? <Box></Box> :
                        <Box>
                            <Typography
                             align="center"
                             sx={{p:1, mt:10, pb:5 }}
                             variant="h5">
                                {chosenSong.name} by {chosenSong.artists[0].name}
                            </Typography>
                            <AudioPlayer src={chosenSong.preview_url}/>
                        </Box>
                    }
                   <Box textAlign='center'>
                    <Button  
                    variant="outlined" 
                    edge="end"  
                    sx={{p:1, mt:5, color:'white',  backgroundColor: '#01579B', borderColor: 'black' }} onClick={handleClose}>
                        Add Song
                    </Button>
                    </Box>  
                </Box>
            </Modal>

            {Object.keys(chosenSong).length === 0 ? <Box sx={{m:2}}>No song chosen yet!</Box> : 
                <Box sx={{m:2}}>
                    <Typography textAlign='center'>
                        Added {chosenSong.name} by {chosenSong.artists[0].name}
                    </Typography>
                    
                    <Box textAlign='center'>
                        <Button variant="contained" sx={{p:1, mt:2, color:'white',  backgroundColor: '#01579B', borderColor: 'black' }}
                        onClick={handleRemoval}>
                                Remove Song
                            </Button>
                    </Box>
                </Box>
            }
        
        <Box textAlign='center'>
                <Button variant="contained" sx={{p:1, color:'white',  backgroundColor: '#01579B', borderColor: 'black' }}  
                disabled={caption.length === 0 || Object.keys(chosenSong).length === 0} onClick={handleSubmit}>
                    Submit
                </Button>
        </Box>

        </Box>
    )
}


export default CreatePost