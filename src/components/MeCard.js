import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@mui/material';

export default function MeCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_myself.png"
        title="Myself"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Myself
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I grew up in Acton, Massachusetts, a town of 65,000 renowned for its top-notch 
        schools. As a high school senior, I’m passionate about rowing, student research, 
        robotics, and community service. I’m working diligently to prepare for college.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>        
      </CardActions>
    </Card>
  );
}