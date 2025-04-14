import React, { useState } from 'react';

const About = ({ setActiveTab }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="w-full h-full bg-[#EFF6F8] font-courier text-black p-6 flex relative">
      {/* Sidebar */}
      <div className="w-[200px] border-r border-gray-400 pr-4">
        <div className="font-bold text-[20px] mb-1">The &lt;Script&gt;</div>
        <div className="text-xs text-black/70 mb-6">Showcase ’25</div>

        <nav className="flex flex-col gap-1 text-[18px] pl-6 mt-[100px]">

          {/* Home */}
          <p className="hover:underline cursor-pointer" onClick={() => setActiveTab('home')}>
            Home
          </p>
          {/* About us */}
          <p className="hover:underline cursor-pointer" onClick={() => setActiveTab('about')}>
            About us
          </p>
          {/* {Projects} */}
          <div>
            <p className="hover:underline cursor-pointer" onClick={() => setShowProjects(!showProjects)}>
              Projects
            </p>
            {showProjects && (
              <div className="pl-6 flex flex-col text-[16px] mt-1">
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('software')}>
                  Software
                </p>
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('arduino')}>
                  Arduino
                </p>
              </div>
            )}
          </div>
          {/* Members */}
          <div>
            <p className="hover:underline cursor-pointer" onClick={() => setShowMembers(!showMembers)}>
              Members
            </p>
            {showMembers && (
              <div className="pl-6 flex flex-col text-[16px] mt-1">
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('giuliani')}>
                  Giuliani
                </p>
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('meg')}>
                  Meg
                </p>
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('shanley')}>
                  Shanley
                </p>
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('pamela')}>
                  Pamela
                </p>
                <p className="cursor-pointer hover:underline" onClick={() => setActiveTab('kate')}>
                  Kate
                </p>
              </div>
            )}
          </div>
          {/* Contact */}
          <p className="hover:underline cursor-pointer" onClick={() => setActiveTab('contact')}>
            Contact
          </p>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 pl-6"></div>
    </div>
  );
};

export default About;
