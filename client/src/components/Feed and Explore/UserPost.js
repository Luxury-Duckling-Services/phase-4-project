import * as React from 'react';
import { Avatar, Box, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

function UserPost() {
  
  return (
    <Card sx={{ width: 600, m:2 }}>
      <CardHeader
        avatar={
          <Avatar src="https://i.pinimg.com/originals/3d/e9/da/3de9daead1949e515293c5fc4375352c.jpg"
            sx={{ bgcolor: red[500] }} 
          >
            {/* If the profile image is not available, we can use the user's initials as placeholder*/}
          </Avatar>
        }
        title="User's Username"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Post Caption
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', height: '220px' }}>
        <CardContent sx={{ width: 380 }}>
          <Typography component="div" variant="h5">
            Track Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Tyler The Creator
          </Typography>
          <CardMedia component="img"
            src="" 
          />
          {/* Insert Audio Player in the src attribute of CardMedia above */}
        </CardContent>

        <CardMedia component="img"
          image="https://www.graphicdesignforum.com/uploads/default/original/2X/d/d3c4e744046205a49d06beb874df3b39da7c9c73.jpeg"
          alt="Alternative Text"
          sx={{ width: 220 }}
        />
      </Box>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}

export default UserPost;
