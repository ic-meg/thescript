import React, { useState, useEffect, useContext, useRef } from 'react';

import MonitorFrame from '../../components/MonitorFrame';
import desktopBg from '../../assets/images/retroDesktopWallpaper.jpg';

import Taskbar from './taskbar';
import DesktopIcon from './DesktopIcon';
import WindowApp from './WindowApp';

import theScriptIcon from '../../assets/icons/shortcut.png';
import ScriptWindow from './ScriptWindow';
import WelcomePopup from './WelcomePopUp';

import Giuliani from './Members/Gil';
import Meg from './Members/Meg';
import Ley from './Members/Ley';
import Pam from './Members/Pam';
import Kate from './Members/Kate';

import { AudioContext } from '../../contexts/AudioContext';
import desktopMusic from '../../assets/sounds/massobeats.mp3'; 

import clickSound from '../../assets/sounds/mouse-click.mp3';
import keySingle from '../../assets/sounds/key-single.MP3';
import keyLoop from '../../assets/sounds/key-loop.MP3';


const Desktop = () => {

  const audioRef = useRef(null);

  useEffect(() => {
    let lastKeyTime = 0;
    let loopAudio = null;
    
    /*Typing effect*/
    const handleKeyDown = () => {
      const now = Date.now();
      const timeSinceLastPress = now - lastKeyTime;
      lastKeyTime = now;
  
      if (timeSinceLastPress < 150) {
        if (!loopAudio || loopAudio.ended || loopAudio.paused) {
          loopAudio = new Audio(keyLoop);
          loopAudio.volume = 0.5;
          loopAudio.play().catch(() => {});
        }
      } else {
        const singleAudio = new Audio(keySingle);
        singleAudio.volume = 0.4;
        singleAudio.play().catch(() => {});
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (loopAudio) {
        loopAudio.pause();
        loopAudio = null;
      }
    };
  }, []);
  
   /*Clicking effect*/
  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; 
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const [apps, setApps] = useState([
    {
      id: 'script',
      title: 'The<Script>',
      icon: theScriptIcon,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />
    },
    {
      id: 'calais',
      title: 'Giuliani - Member Profile',
      icon:  theScriptIcon,
      isOpen: false,
      isMinimized: false,
      component: <Giuliani />
    },
    {
      id: 'fabian',
      title: 'Meg - Member Profile',
      icon:  theScriptIcon,
      isOpen: false,
      isMinimized: false,
      component: <Meg />
    },
    {
      id: 'galo',
      title: 'Shanley - Member Profile',
      icon:  theScriptIcon,
      isOpen: false,
      isMinimized: false,
      component: <Ley />
    },
    {
      id: 'murillo',
      title: 'Pamela - Member Profile',
      icon:  theScriptIcon,
      isOpen: false,
      isMinimized: false, 
      component: <Pam />
    },
    {
      id: 'serrano',
      title: 'Kate - Member Profile',
      icon:  theScriptIcon,
      isOpen: false,
      isMinimized: false,
      component: <Kate />
    }
  ]);

  const { playTrack, toggleMute, isMuted, currentTrack } = useContext(AudioContext);

  
  useEffect(() => {
    if (currentTrack !== desktopMusic) {
      playTrack(desktopMusic, { 
        volume: 0.3, 
        loop: true 
      });
    }
  }, [playTrack, currentTrack]);

  const handleAppClick = (id) => {
    setApps(prev =>
      prev.map(app =>
        app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
      )
    );
  };

  const handleMinimize = (id) => {
    setApps(prev =>
      prev.map(app =>
        app.id === id ? { ...app, isMinimized: true } : app
      )
    );
  };

  const handleClose = (id) => {
    setApps(prev =>
      prev.map(app =>
        app.id === id ? { ...app, isOpen: false, isMinimized: false } : app
      )
    );
  };

  return (
    <MonitorFrame>
      <audio ref={audioRef} src={clickSound} preload="auto" />
      <div className="relative w-full h-full overflow-hidden crt-grainy">

        {/* Wallpaper Background */}
        <img
          src={desktopBg}
          alt="Desktop Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Desktop Icons */}
        <div className="absolute top-2 left-2 flex flex-col gap-3 z-10">
          <div onClick={() => handleAppClick('script')}>
            <DesktopIcon icon={theScriptIcon} label="The <Script>" />
          </div>
          <div onClick={() => handleAppClick('calais')}>
            <DesktopIcon icon={theScriptIcon} label="Calais" />
          </div>
          <div onClick={() => handleAppClick('fabian')}>
            <DesktopIcon icon={theScriptIcon} label="Fabian" />
          </div>
          <div onClick={() => handleAppClick('galo')}>
            <DesktopIcon icon={theScriptIcon} label="Galo" />
          </div>
          <div onClick={() => handleAppClick('murillo')}>
            <DesktopIcon icon={theScriptIcon} label="Murillo" />
          </div>
          <div onClick={() => handleAppClick('serrano')}>
            <DesktopIcon icon={theScriptIcon} label="Serrano" />
          </div>
        </div>

        {/* Open Application Windows */}
        {apps.map(app =>
          app.isOpen && !app.isMinimized && (
            <WindowApp
              key={app.id}
              title="The&lt;Script&gt; - Showcase 2025"
              icon={app.icon}
              onClose={() => handleClose(app.id)}
              onMinimize={() => handleMinimize(app.id)}
            >
            {app.component}
            </WindowApp>
          )
        )}
        
        {/* Welcome Popup */}
        <WelcomePopup />
        
        {/* Taskbar */}
        <Taskbar 
          openApps={apps.filter(app => app.isOpen)} 
          onClickApp={handleAppClick} 
          isMuted={isMuted} 
          toggleMute={toggleMute}
        />
      </div>
    </MonitorFrame>
  );
};

export default Desktop;