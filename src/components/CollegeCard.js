import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CollegeCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_college.png"
        title="College Dream"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          College Dream
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Honestly, I have little to no clue about what I will study in college... but I knew it is the best path for my future. 
        I was looking at a map of the U.S. and thinking hmmm... New York sounds about right! 
        or perhaps California? Ok, ok, I still have to prepare for my SAT test now.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}