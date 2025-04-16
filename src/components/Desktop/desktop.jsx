import React, { useState, useEffect, useContext } from 'react';
import MonitorFrame from '../../components/MonitorFrame';
import desktopBg from '../../assets/images/retroDesktopWallpaper.jpg';
import Taskbar from './taskbar';
import DesktopIcon from './DesktopIcon';
import WindowApp from './WindowApp';
import theScriptIcon from '../../assets/icons/shortcut.png';
import ScriptWindow from './ScriptWindow';
import WelcomePopup from './WelcomePopUp';
import { AudioContext } from '../../contexts/AudioContext';
import desktopMusic from '../../assets/sounds/massobeats.mp3'; 

const Desktop = () => {
  const [apps, setApps] = useState([
    {
      id: 'script',
      title: 'The <Script>',
      icon: theScriptIcon,
      isOpen: false,
      isMinimized: false,
    },
  ]);

  const { playTrack, toggleMute, isMuted, currentTrack } = useContext(AudioContext);

  // Continue playing the same music track when desktop mounts
  useEffect(() => {
    if (currentTrack !== desktopMusic) {
      playTrack(desktopMusic, { 
        volume: 0.3, // Lower volume for desktop
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
      <div className="relative w-full h-full overflow-hidden crt-grainy">
        {/* Mute Button - Top Right Corner */}
        <button 
          onClick={toggleMute}
          className="absolute top-2 right-2 bg-black bg-opacity-50 border border-white text-white px-2 py-1 text-xs font-mono z-50 hover:bg-opacity-70 transition-all"
        >
          {isMuted ? 'UNMUTE █' : 'MUTE ▏'}
        </button>

        {/* Wallpaper Background */}
        <img
          src={desktopBg}
          alt="Desktop Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Desktop Icons */}
        <div className="absolute top-2 left-2 flex flex-col gap-3 z-10">
          <div onClick={() => handleAppClick('script')}>
            <DesktopIcon icon={theScriptIcon} label="The <script>" />
          </div>
        </div>

        {/* Open Application Windows */}
        {apps.map(app =>
          app.isOpen && !app.isMinimized && (
            <WindowApp
              key={app.id}
              title="The Script - Showcase 2025"
              icon={app.icon}
              onClose={() => handleClose(app.id)}
              onMinimize={() => handleMinimize(app.id)}
            >
              <ScriptWindow />
            </WindowApp>
          )
        )}
        
        {/* Welcome Popup */}
        <WelcomePopup />
        
        {/* Taskbar */}
        <Taskbar openApps={apps.filter(app => app.isOpen)} onClickApp={handleAppClick} />
      </div>
    </MonitorFrame>
  );
};

export default Desktop;