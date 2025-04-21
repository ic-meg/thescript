import React from 'react';
import softwareScreenshot from '../../../assets/images/landscape.jpg'; 

const Software = () => {
  return (
    <div className="w-full h-full text-black font-courier px-6 py-4 space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-[40px] font-black font-courier leading-tight">Console Game</h1>
        <h2 className="text-[20px] font-bold font-courier">Projects</h2>
        <p className="mt-2 text-[15px] max-w-[700px] text-justify">
        Below are some of the console game projects our team developed during the last semester as part of our academic coursework.
        </p>
      </div>

      <hr className="border border-black/50" /> 

    {/* Tic Tac Toe */}
    <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Tic Tac Toe</h3>
        <p className="text-[15px] max-w-[750px] text-justify mt-2">
          the&lt;script&gt;.com is our team’s portfolio site — the one you're viewing right now!
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

      <p className="text-sm text-center mt-2">
        <em>Figure 9:</em> A screenshot of our team’s online enrollment..
      </p>
      </div>
      <p className="text-[15px] max-w-[750px] text-justify mt-4">
        This portfolio represents more than just a class requirement — it reflects our creativity, teamwork, and appreciation for web history. From designing pixel-perfect icons to building reusable components, this site is a passion project that showcases who we are as developers and as a team.
      </p>

      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            [OS Site] – The&lt;Script&gt;.com
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            [Github Repository] – The&lt;Script&gt; Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] max-w-[750px] text-justify mt-6">
        the&lt;script&gt;.com was a meaningful opportunity for our team to apply everything we've learned — from version control to UI/UX design, and frontend development using modern frameworks. Through collaboration, trial-and-error, and a shared love for nostalgic aesthetics, we brought this digital showcase to life. We hope you enjoy exploring it as much as we enjoyed building it.
      </p>
      
      
      
    </div>
    
  );
};

export default Software;
