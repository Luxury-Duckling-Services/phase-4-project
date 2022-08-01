import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from "react";

function CreatePost({ onSubmit }) { 
    const [caption, setCaption] = useState("");

    function handleChange(e) {
        setCaption(e.target.value);
    }

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
                        rows={2}
                        maxRows={4}
                        fullWidth
                        value={caption}
                        onChange={handleChange}
                    />
                    
                    <Button onClick={handleSubmit} variant="contained" sx={{mt:2, mb: 2, float: "right"}}>
                        Submit
                    </Button>
                </form>

                
            </Box>
        </Box>
    )
}

export default CreatePost