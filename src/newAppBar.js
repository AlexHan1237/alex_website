import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typewriter from "./Typewriter";

function MyAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="home" target="_blank" >
            <Avatar sx={{ height: '140px', width: '140px', display: { xs: 'none', md: 'flex' }, mr: 1, margin: 1 }} alt="Alexander Han" src="/img/alex.jpg" href="home" />
          </a>
          
          <Box  
            component="a"
            href="home"
            sx={{
              margin: 6,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <Typewriter />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>

          <Avatar sx={{ height: '70px', width: '70px', display: { xs: 'flex', md: 'none' }, mr: 1 }} alt="Alexander Han" src="/img/alex.jpg" />
          <Typography
            variant="body2"
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Comic Sans MS',
              fontWeight: 200,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hi there, I am Alexander Han, a highschool senior, living in Acton, Massachusetts. I am working hard to prepare myself for college now.
          </Typography>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
