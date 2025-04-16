import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import './tailwind.css';
import Start from './pages/startup';
import Play from './pages/play';
import Shutdown from './components/shutdown';
import Desktop from './components/Desktop/desktop';
import { AudioProvider } from './contexts/AudioContext'; 

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);

  return (
    <AudioProvider> 
      <div className="grainy-overlay">
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/play" element={<Play />} /> 
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/shutdown" element={<Shutdown />}/>
        </Routes>
      </div>
    </AudioProvider>
  );
}

export default App;