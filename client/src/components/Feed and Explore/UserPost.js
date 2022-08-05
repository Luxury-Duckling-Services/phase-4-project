import * as React from 'react';
import { Avatar, Box, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AudioPlayer from 'material-ui-audio-player';

// function UserPost( { post } ) {
  
//   return (
//     <Card sx={{ width: 'auto', ml: 2, mr:2, mb:6, mt: 6 }}>
//       <CardHeader
//         avatar={
//           <Avatar
//             src={post.user_profile_picture}
//             sx={{ bgcolor: red[500] }}
//           >
//             {post.username[0]}
//           </Avatar>
//         }
//         title={post.username}
//         subheader={post.created_at}
//       />

//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {post.caption}
//         </Typography>
//       </CardContent>

//       <Box sx={{ display: 'flex', height: '220px', justifyContent:'space-evenly' }}>
//         <CardContent sx={{ width: 380 }}>
//           <Typography component="div" variant="h5">
//             {post.song}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             {post.artist}
//           </Typography>

//           <AudioPlayer src={post.preview_url}/>
//         </CardContent>

//         <CardMedia component="img"
//           image={post.image}
//           alt={post.song}
//           sx={{ width: 220 }}
//         />
//       </Box>

//       {/* <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//       </CardActions> */}
      
//     </Card>
//   );
// }


function UserPost( { post } ) {
  
  return (
    <Card sx={{ width: 'auto', pb: 5, mr:0, mb:2 }}>
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
        <Typography variant="body1" color="black">
          {post.caption}
        </Typography>
      </CardContent>

        <CardMedia 
          sx={{ m: 'auto', height: 300, width: 300 }} 
          component="img"
          image={post.image}
          alt={post.song}
          // sx={{ width: 220 }}
        />
      <Box sx={{ display: 'flex', height: '40px', justifyContent:'space-evenly' }}>
        <CardContent sx={{ width: 380 }}>
          <Typography align="center" component="div" variant="h5">
            {post.song}
          </Typography>
          <Typography align="center" variant="subtitle1" color="text.secondary" component="div">
            {post.artist}
          </Typography>

          {/* <AudioPlayer src={post.preview_url}/> */}
        </CardContent>

      </Box>
        
      
      <Grid width="85%" sx={{p:1, ml:5, mr:5, mt: 5 }}>
        <AudioPlayer
          src={post.preview_url}
          autoPlay={false}
        />
      </Grid>
    

            {/* <AudioPlayer src={post.preview_url}/> */}
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
      
    </Card>
  );
}

export default UserPost;
