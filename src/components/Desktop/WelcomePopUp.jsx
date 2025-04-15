import React, { useEffect, useState } from 'react';

const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
        <div
            className={`absolute top-4 right-4 z-50 bg-[#C0C0C0] border border-black 
                        w-[290px] h-[90px] shadow-md font-courier text-m 
                        transition-all duration-500 ease-out 
                        ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
        >

        <div className="flex justify-between items-center bg-[#000080] text-white px-2 py-[2px] h-[24px]">
            <span className="text-xs">Windows Message</span>
            <button 
            className="text-white text-xs" 
            onClick={() => setVisible(false)}
            >
            ✕
            </button>
        </div>

        <div className="flex items-start gap-2 px-3 py-2">
            <div className="text-red-600 text-m font-bold"></div>
                <p className="text-xs leading-tight">
                    Welcome to <strong>The &lt;Script&gt;</strong> Portfolio! <br />
                    Thanks for visiting and enjoy the retro vibes 🎉
                </p>
        </div>

    
    </div>
  );
};

export default WelcomePopup;
