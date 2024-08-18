import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

import Homepage from './components/HomePage';
import MePage from './components/MePage';
import ResearchPage from './components/ResearchPage';
import RoboticsPage from './components/RoboticsPage';
import RowingPage from './components/RowingPage';
import CommunityServicePage from './components/CommunityServicePage';
import CollegePage from './components/CollegePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        return (
        <Route path='home' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='Research' element={<ResearchPage />} />
        <Route path='Me' element={<MePage />} />
        <Route path='Rowing' element={<RowingPage />} />
        <Route path='Robotics' element={<RoboticsPage />} />
        <Route path='CommunityService' element={<CommunityServicePage />} />
        <Route path='College' element={<CollegePage />} />
        );        
      </Route>
    </Routes>
  </BrowserRouter>
);

