import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RoboticsCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_robotics.png"
        title="FTC Robotics"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          FTC Robotics
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Are you fascinated by robots performing somersaults and backflips? I certainly am! 
        I'm proud to be a member of First Tech Challenge (FTC) team #16091. Along with 14 friends, 
        we design, build, assemble, code, and test robots for FTC competitions. 
        I'm thrilled to share that our team won the 2024 FTC New England Invitational Championship.<p/>

        Through FTC, we gain hands-on experience in engineering, coding, and problem-solving while learning 
        valuable life skills like collaboration and critical thinking. To assist newcomers, I created a website - 
        <Button size="small" href="https://www.ftctraininghub.com" target="_blank">www.ftctraininghub.com</Button> to share the fundamentals 
        we've learned, based on my notes. 

        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}