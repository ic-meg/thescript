import React from 'react';
import monitor from '../assets/images/apple.png';

const MonitorFrame = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#eaeada] flex items-center justify-center">
      <div
        className="relative w-full max-w-[1280px] aspect-[16/10] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${monitor})` }}
      >

        <div className="absolute z-10 top-[1.5%] left-[1.25%] w-[97.5%] h-[89%] bg-black rounded-sm overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MonitorFrame;