import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './play.css';
import logo from '../assets/icons/icon-with-name.svg';

const Play = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsSpinning(true);

    setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        navigate('/desktop');
      }, 800); // timing after fade
    }, 2000); 
  };

  return (
    <div className={`play-screen retro-boot-in ${fadeOut ? 'fade-out' : ''}`}>
      <p className="click-to-play">Click to Play</p>

      <div className="vinyl-wrapper relative" onClick={handleClick}>
        <img
          src={logo}
          alt="The Script Logo"
          className={`vinyl-image ${isSpinning ? 'spin-infinite' : ''}`}
        />
      </div>
    </div>
  );
};

export default Play;
