import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

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
        I grew up in Acton, Massachusetts, a town of 26,000 in the greater Boston area, renowned for its top-notch 
        schools. As a senior of Acton-Boxborough Regional High School, I’m passionate about rowing, student research, 
        robotics, and community service. I’m working diligently to prepare for college.<p/>
        I have a wonderful family: my dad and older brother are software engineers, and my mom is a CPA. After playing hockey 
        and soccer for many years, I transitioned to varsity rowing in high school due to injuries. I also work part-time 
        as a soccer referee.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>        
      </CardActions>
    </Card>
  );
}