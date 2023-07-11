import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './pages/game';
import Staking from './pages/staking';
import Workspace from './pages/workspace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route exact path="/play" element={<Game />} />
        <Route exact path="/staking" element={<Staking />} />
        <Route exact path="/workspace" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
