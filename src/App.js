import './App.css';
import MyAppBar from './newAppBar';
import { Button, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <br/>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant="contained" href="/resources/Alexander Han CV.pdf" target="_blank" color="error" sx={{ borderRadius: 28 }} startIcon={<PersonPinCircleOutlinedIcon />}>Resume</Button>
        <Button variant="contained" href="/resources/paper.pdf" target="_blank" color="error" sx={{ borderRadius: 28 }} startIcon={<ArticleOutlinedIcon />}>Paper</Button>
        <Button variant="contained" href="https://www.ftctraininghub.com" target="_blank" color="error" sx={{ borderRadius: 28 }} startIcon={<SupervisorAccountOutlinedIcon />}>TrainingHub</Button>
      </Stack>
      <div className={`app ${''}`}>
        <main style={{ height: "100vh", width: "100%" }}>
          <>
            <Outlet />
          </>
        </main>

      </div>
    </div>
  );
}

export default App;
