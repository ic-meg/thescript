import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

const WindowApp = ({ title, icon, onClose, onMinimize, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const nodeRef = useRef(null);

  if (isMinimized) return null;

  return (
    <Draggable handle=".window-title-bar" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="absolute top-[50px] left-[10vw] w-[90vw] max-w-[980px] h-[80vh] max-h-[600px] border-[3px] border-gray-800 shadow-[4px_4px_0px_rgba(0,0,0,0.4)] bg-[#F0F0F0] z-50 font-['Courier_New',_monospace] flex flex-col"
      >
        {/* Title Bar */}
        <div className="window-title-bar flex items-center justify-between bg-[#000080] text-white text-sm px-2 py-1 cursor-move">
          <div className="flex items-center gap-2">
            <img src={icon} alt="App Icon" className="w-4 h-4" />
            <span className="font-bold text-[13px]">{title}</span>
          </div>
          <div className="space-x-1">
            <button
              className="bg-gray-300 text-black px-1 w-[22px] h-[20px] leading-none border border-black"
              onClick={() => {
                setIsMinimized(true);
                onMinimize?.();
              }}
            >
              _
            </button>
            <button
              className="bg-gray-300 text-black px-1 w-[22px] h-[20px] leading-none border border-black"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4 text-sm text-black">
          {children}
        </div>

        <div className="flex items-center justify-between h-[22px] bg-[#E4E4E4] border-t border-gray-500 text-[10px] text-black px-[2px] gap-[2px]">
          <div className="w-full px-2 py-[2px] border border-gray-400 bg-[#E4E4E4] leading-none">
            © 2025 The Script
          </div>
          <div className="flex gap-[2px]">
            <div className="w-[16px] h-[15px] border border-gray-400 bg-[#F0F0F0]" />
            <div className="w-[16px] h-[15px] border border-gray-400 bg-[#F0F0F0]" />
            
          </div>

          <div className="w-full px-2 py-[2px] border border-gray-400 bg-[#E4E4E4] leading-none text-transparent">
              placeholder
          </div>
        </div>

      </div>
    </Draggable>
  );
};

export default WindowApp;
