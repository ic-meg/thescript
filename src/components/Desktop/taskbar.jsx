import React, { useEffect, useState, useRef, useContext } from 'react';
import volumeIcon from '../../assets/icons/volume.svg';
import appIcon from '../../assets/icons/windows.png';
import shutdownIcon from '../../assets/icons/shortcut.png';
import { useNavigate } from 'react-router-dom';

import shutdownSound from '../../assets/sounds/windows-shutdown.mp3';
import { AudioContext } from '../../contexts/AudioContext';
import clickSound from '../../assets/sounds/mouse-click.mp3';

const Taskbar = ({ openApps = [], onClickApp, toggleMute, isMuted }) => 
  {
  const clickAudioRef = useRef(null);
  const navigate = useNavigate();
  const { audioRef } = useContext(AudioContext);
  const startButtonRef = useRef(null);

  const [time, setTime] = useState('');
  const [startOpen, setStartOpen] = useState(false);
  const startMenuRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setTime(`${hours}:${minutes.toString().padStart(2, '0')}${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target)
      ) {
        setStartOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <>
    <audio ref={clickAudioRef} src={clickSound} preload="auto" />
    {startOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[998]" />
      )}
    <div className="absolute bottom-0 left-0 w-full h-[40px] bg-[#E4E4E4] border-t flex items-center justify-between px-2 font-['Courier_New',_monospace] text-black z-50">
        {/* Start button */}
        <div className="flex items-center gap-2 text-sm">
        <button
          ref={startButtonRef}
          onClick={() => {
            if (clickAudioRef.current) {
              clickAudioRef.current.currentTime = 0;
              clickAudioRef.current.play().catch(() => {});
            }
            setStartOpen(prev => !prev);
          }}
          className={`flex items-center gap-2 px-2 py-[2px] text-black bg-[#E4E4E4] border 
            ${startOpen
              ? 'shadow-[inset_4px_4px_0_#7E7E7E,inset_-4px_-4px_0_#B1B1B1,inset_2px_2px_0_#262626,inset_-2px_-2px_0_#F0F0F0]'
              : 'shadow-[inset_2px_2px_1px_#ffffff,inset_-2px_-2px_1px_#8b8b8b]'
            }`}
        >
          <img src={appIcon} alt="App Icon" className="w-4 h-4" />
          <span className="text-[15px]">Start</span>
        </button>




          {/*  Open App Buttons */}
          {openApps.map((app) => (
            <button
              key={app.id}
              onClick={() => onClickApp(app.id)}
              className={`flex items-center gap-2 h-[24px] px-3 py-[2px] text-sm font-['Courier_New_Custom',_monospace] bg-[#COCOCO] ${
                app.isMinimized
                  ? 'shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#B0B0B0]' 
                  : 'shadow-[inset_-2px_-2px_1px_#ffffff,inset_2px_2px_1px_black]' 
              }`}
              
            >
              <img src={app.icon} alt="App" className="w-[16px] h-[16px]" />
              <span className="text-[14px] leading-none">{app.title}</span>
            </button>

          ))}
        </div>
      {/*  Clock and volume */}
        <div className="flex items-center gap-2 px-2 h-[32px] w-auto bg-[#E4E4E4]
        shadow-[inset_-2px_-2px_0_#F0F0F0,inset_2px_2px_0_#7E7E7E] text-[14px]">

        <button
          onClick={toggleMute}
          className="relative w-[18px] h-[18px] flex items-center justify-center cursor-pointer hover:brightness-110"
          title={isMuted ? "Unmute" : "Mute"}
        >
          <img src={volumeIcon} alt="Volume Icon" className="w-[14px] h-[14px]" />
          
          {isMuted && (
            <div className="absolute w-[16px] h-[16px] flex items-center justify-center">
              <span className="absolute text-[16px] text-red-600 font-bold leading-none rotate-[35deg] -translate-y-[1px]">/</span>
            </div>
          )}
        </button>

        <span className="">{time}</span>
      </div>


      </div>

      {/* Start Menu */}
      {startOpen && (
        <div
          ref={startMenuRef}
          className="absolute bottom-[40px] left-2 z-[999] flex border shadow-lg h-[300px] w-[260px] font-['Courier_New',_monospace]"
        >
          <div className="bg-[#8F8F8F] w-[40px] flex items-center justify-center">
            <span className="-rotate-90 absolute bottom-[70px] left-[-42px] text-white text-[16px] font-bold whitespace-nowrap leading-none">
              The&lt;Script&gt;
            </span>
          </div>
          <div className="bg-[#C0C0C0] flex flex-col justify-between p-4 w-full">
            <div className="flex-1"></div>
            <div
              onClick={() => {
                if (audioRef?.current) {
                  audioRef.current.pause();
                }

                const shutdownAudio = new Audio(shutdownSound);
                shutdownAudio.volume = 0.6;

                shutdownAudio.play().then(() => {
                  
                    navigate('/shutdown');
                  
                }).catch(e => {
                  console.log("Shutdown sound error:", e);
                  navigate('/shutdown');
                });
              }}

             
            
            className="border-t border-gray-400 pt-2 flex items-center gap-2 cursor-pointer"
          >

              <img src={shutdownIcon} alt="Shutdown" className="w-[18px] h-[16px]" />
              <span className="text-[14px] text-black">Shut down...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Taskbar;
