import React, { useState, useEffect } from 'react';

const SidebarLayout = ({ children, activeTab, setActiveTab }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showMembers, setShowMembers] = useState(false);


  useEffect(() => {
    if (['software', 'arduino'].includes(activeTab)) setShowProjects(true);
    if (['giuliani', 'meg', 'shanley', 'pamela', 'kate'].includes(activeTab)) setShowMembers(true);
  }, [activeTab]);

  const isActive = (tab) =>
    activeTab === tab ? 'underline font-bold decoration-[#B3A5A5] underline-offset-4' : '';

  return (
    <div className="w-full h-full bg-[#EFF6F8] font-courier text-black p-6 flex relative">
      {/* Sidebar */}
      <div className="w-[200px] border-r border-gray-400 pr-4">
        <div className="font-bold text-[20px] mb-1">The &lt;Script&gt;</div>
        <div className="text-xs text-black/70 mb-6">Showcase ’25</div>

        <nav className="flex flex-col gap-1 text-[18px] pl-6 mt-[80px]">
          {/* Home */}
          <p
            className={`cursor-pointer hover:underline ${isActive('home')}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </p>

          {/* About */}
          <p
            className={`cursor-pointer hover:underline ${isActive('about')}`}
            onClick={() => setActiveTab('about')}
          >
            About us
          </p>
        {/* Projects */}
        <div>
        <p
            className={`cursor-pointer hover:underline ${isActive('projects')}`}
            onClick={() => {
            setActiveTab('projects');
            setShowProjects((prev) => !prev);
            }}
        >
            Projects
        </p>
        {showProjects && (
            <div className="pl-4 flex flex-col text-[16px] mt-1">
            <p
                className={`cursor-pointer hover:underline ${isActive('software')}`}
                onClick={() => setActiveTab('software')}
            >
                Software
            </p>
            <p
                className={`cursor-pointer hover:underline ${isActive('arduino')}`}
                onClick={() => setActiveTab('arduino')}
            >
                Arduino
            </p>
            </div>
        )}
        </div>

        {/* Members */}
        <div>
        <p
            className={`cursor-pointer hover:underline ${isActive('members')}`}
            onClick={() => {
            setActiveTab('members');
            setShowMembers((prev) => !prev);
            }}
        >
            Members
        </p>
        {showMembers && (
            <div className="pl-4 flex flex-col text-[16px] mt-1">
            <p className={`cursor-pointer hover:underline ${isActive('giuliani')}`} onClick={() => setActiveTab('giuliani')}>Giuliani</p>
            <p className={`cursor-pointer hover:underline ${isActive('meg')}`} onClick={() => setActiveTab('meg')}>Meg</p>
            <p className={`cursor-pointer hover:underline ${isActive('shanley')}`} onClick={() => setActiveTab('shanley')}>Shanley</p>
            <p className={`cursor-pointer hover:underline ${isActive('pamela')}`} onClick={() => setActiveTab('pamela')}>Pamela</p>
            <p className={`cursor-pointer hover:underline ${isActive('kate')}`} onClick={() => setActiveTab('kate')}>Kate</p>
            </div>
        )}
        </div>


          {/* Contact */}
          <p
            className={`cursor-pointer hover:underline ${isActive('contact')}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </p>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-6 overflow-auto max-h-full pr-6">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
