import React from 'react';
//import { makeStyles } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import MeCard from './MeCard';
import ResearchCard from './ResearchCard';
import RoboticsCard from './RoboticsCard';
import RowingCard from './RowingCard';
import CommunityServiceCard from './CommunityServiceCard';
import CollegeCard from './CollegeCard';



export default function HomeGrid() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <MeCard />
        </Grid>
        <Grid item xs={4}>
          <ResearchCard />
        </Grid>
        <Grid item xs={4}>
          <RoboticsCard />
        </Grid>
        <Grid item xs={4}>
          <RowingCard />
        </Grid>
        <Grid item xs={4}>
          <CommunityServiceCard />
        </Grid>
        <Grid item xs={4}>
          <CollegeCard />
        </Grid>
      </Grid>
    </Box>
  );
}