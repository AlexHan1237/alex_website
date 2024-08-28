import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CommunityCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_volunteer.png"
        title="Community Service"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Community Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Box sx={{ fontStyle: 'italic' }}>
        “We make a living by what we get, but we make a life by what we give.” -Winston Churchill <p/>
        </Box>
        I felt a deep sense of gratitude for the community and friends I grew up with. I dedicated much of 
        my summers to volunteering with the Summer Day Programs that I used to attend when I was a kid. Being able to give 
        back was incredibly fulfilling and enjoyable.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}