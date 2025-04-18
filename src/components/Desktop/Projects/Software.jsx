import React from 'react';
import softwareScreenshot from '../../../assets/images/landscape.jpg'; 

const Software = () => {
  return (
    <div className="w-full h-full text-black font-courier px-6 py-4 space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-[40px] font-black font-courier leading-tight">Software</h1>
        <h2 className="text-[20px] font-bold font-courier">Projects</h2>
        <p className="mt-2 text-[15px] max-w-[700px] text-justify">
        Below are some of the software projects our team developed during the last semester as part of our academic coursework.
        </p>
      </div>

      <hr className="border border-black/50" />

      {/* Project Description */}
      <div>
        <h3 className="text-[26px] font-black font-vt323">thescript.com</h3>
        <p className="text-[15px] max-w-[750px] text-justify mt-2">
          thescript.com is our team’s portfolio site — the one you're viewing right now!
          This project was built as part of our Web Systems & Technologies 2 midterm.
          It's fully inspired by the classic Windows 95 look, and includes animated UI,
          retro assets, and project windows to simulate an old-school OS.
          <br /><br />
          It was built using ReactJS, TailwindCSS, and a lot of pixel-perfect CSS. We started this around early April and developed it collaboratively using GitHub. We focused on making it responsive, modular, and retro-accurate — all for the love of tech and nostalgia!
        </p>
      </div>

      {/* Image */}
      <div>
        <img
          src={softwareScreenshot}
          alt="Software Project Screenshot"
          className="border border-black w-full max-w-[850px] shadow-md"
        />
      </div>
    </div>
  );
};

export default Software;
