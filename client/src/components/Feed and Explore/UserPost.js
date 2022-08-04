import * as React from 'react';
import { Avatar, Box, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AudioPlayer from 'material-ui-audio-player';

function UserPost( { post } ) {
  
  return (
    <Card sx={{ width: 'auto', ml: 2, mr:2, mb:6, mt: 6 }}>
      <CardHeader
        avatar={
          <Avatar
            src={post.user_profile_picture}
            sx={{ bgcolor: red[500] }}
          >
            {post.username[0]}
          </Avatar>
        }
        title={post.username}
        subheader={post.created_at}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', height: '220px', justifyContent:'space-evenly' }}>
        <CardContent sx={{ width: 380 }}>
          <Typography component="div" variant="h5">
            {post.song}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {post.artist}
          </Typography>

          <AudioPlayer src={post.preview_url}/>
        </CardContent>

        <CardMedia component="img"
          image={post.image}
          alt={post.song}
          sx={{ width: 220 }}
        />
      </Box>

      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
      
    </Card>
  );
}

export default UserPost;
