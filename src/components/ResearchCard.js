import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ResearchCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_ai.png"
        title="Research"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Research on AI
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Inspired by stories from family and friends who successfully used ChatGPT to diagnose illnesses that 
        eluded their doctors, I started self-paced research on the effectiveness of common diagnostic 
        parameters in February 2024. I completed and documented my findings in a paper during the summer of 2024.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}