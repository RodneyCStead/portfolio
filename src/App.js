import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalClock from './components/DigitalClock';
import MyProjectsBar from './components/MyProjectsBar';
import ProjectLinkBoxs from './components/ProjectLinkBoxs';
import MemoryGame from './components/MemoryCardGame';
import AboutMeBar from './components/AboutMeBar';
import NLQuiz from './components/NLQuiz';
import AboutMeBoxes from './components/AboutMeBoxes';

function App() {


  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <MyProjectsBar />
                <ProjectLinkBoxs />
                <AboutMeBar />
              </div>
            }
          ></Route>
          <Route 
            path="/about" 
            element={
              <div>
                <MyProjectsBar />
                <AboutMeBoxes />
                <AboutMeBar />
              </div>
            } 
          ></Route>
          <Route 
            path = "/clock" 
            element={
              <div>
                <MyProjectsBar />
                <DigitalClock />
              </div>
            } 
          ></Route>
          <Route 
            path = "/memory-card-game" 
            element={
              <div>
                <MyProjectsBar />
                <MemoryGame />
              </div>
            }
          ></Route> 
          <Route 
              path = "/NLQuiz" 
              element ={
              <div>
                <MyProjectsBar />
                <NLQuiz />
              </div>
            } 
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
