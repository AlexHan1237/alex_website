import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RowingCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        component='video'
        image={"/resources/Rowing.mp4"}
        title="My Rowing"
        autoPlay
      /> */}
      <CardMedia sx={{ height: 200 }} component="iframe" src="/resources/Rowing.mp4" allow="autoPlay"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rowing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        From the age of 6, hockey and soccer have been central to my life. After sustaining two major injuries 
        while playing junior varsity hockey, I had to transition to a non-contact sport. Fortunately, I discovered 
        rowing and have thoroughly enjoyed it. I Started as a novice but am now a senior member of the varsity 
        rowing team.
        </Typography>
      </CardContent>
      <CardActions>        
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}