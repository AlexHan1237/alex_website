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
        parameters in February 2024. I completed and documented my findings in a paper during the summer of 2024.<p/>

        My study evaluates effectiveness by supplying GPT-3.5 and GPT-4o with detailed descriptions of symptoms, medical history, 
        medical tests, and medications for three sample diseases, then analyzing their responses. Statistical analysis of the 
        results shows that symptoms and medical history are the most crucial factors in medical diagnostics. While medical tests 
        are important for diagnosing some conditions, they are less relevant for others. Medications, on the other hand, do not 
        significantly influence the diagnostic process.
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" href="/resources/Alexander Han CV.pdf" target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
}