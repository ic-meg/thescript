import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './startup.css';
import startupMusic from '../assets/sounds/massobeats.mp3'; 

const Startup = () => {
  const navigate = useNavigate();

  const messages = useMemo(() => [
    "Verifying system integrity...",
    "Initializing bootloader modules...",
    "Loading configuration files...",
    "Detecting peripherals...",
    "Peripheral Check: Mouse [OK], Keyboard [OK], Monitor [OK]",
    "Starting the Script OS...",
    "Initializing system files...",
    "Loading user interface..."
  ], []);

  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [blinker, setBlinker] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set lower volume for background music
      audioRef.current.loop = true;
      
      // Attempt to play (might be blocked by browser until user interaction)
      const playPromise = audioRef.current.play().catch(e => {
        console.log("Audio play prevented:", e);
      });

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };
    }
  }, []);

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Fade out and navigation when done
  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        setShouldFadeOut(true);
        setTimeout(() => {
          navigate('/play'); 
        }, 1000);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [isDone, navigate]);
  
  // Blinking cursor effect
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
      }, 18);
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
      {/* Hidden audio element */}
      <audio ref={audioRef} src={startupMusic} />
      
      {/* Mute button in top right corner */}
      <button 
        onClick={toggleMute}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: '1px solid white',
          color: 'white',
          padding: '2px 5px',
          cursor: 'pointer',
          fontFamily: "'Courier New Custom', monospace"
        }}
      >
        {isMuted ? 'UNMUTE' : 'MUTE'}
      </button>

      <div className="startup-content">
        <p>The Script. Released: 03/24/2025</p>
        <p>The Script Inc. TSBIOS © 2000 The Script Inc.</p><br/><br/>
        <p>SIBIOS S13 2000–2025 Special Edition</p><br/>
        <p>Script Interactive Bootloader (SIB) v3.7</p>
        <p>Checking RAM: 16384 MB OK</p><br/>
        <p>Loading Resources... ({displayedLines.length}/{messages.length})</p><br/>

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