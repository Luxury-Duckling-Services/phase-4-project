import * as React from 'react';
import { Avatar, Box, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

function UserPost( { post } ) {
  
  return (
    <Card sx={{ width: 'auto', ml: 2, mr:2, mb:6, mt: 6 }}>
      <CardHeader
        avatar={
          <Avatar src="https://i.pinimg.com/originals/3d/e9/da/3de9daead1949e515293c5fc4375352c.jpg"
            sx={{ bgcolor: red[500] }} 
          >
            {/* If the profile image is not available, we can use the user's initials as placeholder*/}
          </Avatar>
        }
        title="User's Username"
        subheader={post.created_at}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', height: '220px' }}>
        <CardContent sx={{ width: 380 }}>
          <Typography component="div" variant="h5">
            {post.song}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {post.artist}
          </Typography>
          <CardMedia component="img"
            src="" 
          />
          {/* Insert Audio Player in the src attribute of CardMedia above */}
        </CardContent>

        <CardMedia component="img"
          image={post.image}
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
