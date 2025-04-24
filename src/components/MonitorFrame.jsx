import React, { useEffect, useState } from 'react';
import monitorLandscape from '../assets/images/apple.png';
import monitorPortrait from '../assets/images/portrait-apple.png';
import beatGif from '../assets/images/beat.gif';

const MonitorFrame = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectedMonitor = isMobile ? monitorPortrait : monitorLandscape;

  const cutoutStyle = isMobile
    ? {
        top: '0.5%',
        left: '1.5%',
        width: '99.5%',
        height: '95.5%', 
        position: 'absolute',
      }
    : {
        top: '1.5%',
        left: '1.25%',
        width: '97.5%',
        height: '89%',
        position: 'absolute',
      };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${beatGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={`relative w-full max-w-[1280px] ${
          isMobile ? 'h-screen' : 'aspect-[16/10]'
        } bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${selectedMonitor})` }}
      >
        <div
          className="absolute z-10 bg-black rounded-sm overflow-hidden"
          style={cutoutStyle}
        >
          <div className="w-full h-full relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


export default MonitorFrame;
