import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import './startup.css';

const Startup = () => {
  const history = useHistory();

  const messages = useMemo(() => [
    "Verifying system integrity...",
    "Initializing bootloader modules...",
    "Loading configuration files...",
    "Detecting peripherals...",
    "Peripheral Check: Mouse [OK], Keyboard [OK], Monitor [OK]",
    "Starting the Script OS...",
    "Initializing system files...",
    "Loading user interface..."
    
  ],[]);

  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [blinker, setBlinker] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);


  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        setShouldFadeOut(true);
        setTimeout(() => {
          history.push('/play'); 
        }, 1000); 
      }, 700); // seconds to fade
      return () => clearTimeout(timeout);
    }
  }, [isDone, history]);
  
  // Blinking cursor toggle
  useEffect(() => {
    const blink = setInterval(() => {
      setBlinker(prev => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentLine >= messages.length) {
      setIsDone(true);
      return;
    }

    if (charIndex < messages[currentLine].length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 18); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      setDisplayedLines(prev => [...prev, messages[currentLine]]);
      setCurrentLine(prev => prev + 1);
      setCharIndex(0);
    }
  }, [charIndex, currentLine, messages]);

  const currentText = messages[currentLine]?.substring(0, charIndex) || "";

  return (
    <div className={`startup-screen ${shouldFadeOut ? 'fade-out' : ''}`}>
      <div className="startup-content">
        <p>The Script. Released: 03/24/2025</p>
        <p>The Script Inc. TSBIOS © 2000 The Script Inc.</p><br/> <br />
        <p>SIBIOS S13 2000–2025 Special Edition</p><br/>
        <p>Script Interactive Bootloader (SIB) v3.7</p>
        <p>Checking RAM: 16384 MB OK</p><br/>
        <p>Loading Resources... ({displayedLines.length}/{messages.length})</p> <br />


        {displayedLines.map((line, i) => (
          <p key={i} className="indented">{line}</p>
        ))}

        {!isDone && (
          <p className="indented">
            {currentText}
            <span className="cursor">{blinker ? '_' : ' '}</span>
          </p>
        )}
      </div>

      <footer className="startup-footer">
        <p>
          {isDone ? <span className="cursor">{blinker ? '_' : ' '}</span> : ''}
        </p>
        <p>Tip: Creativity is the only bootloader you need.</p>
      </footer>

    </div>
  );
};

export default Startup;
