import React, { useState, useEffect } from 'react';

const SidebarLayout = ({ activeTab, setActiveTab, children }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

  useEffect(() => {
    const showProjectTabs = ['projects', 'software', 'arduino'];
    const showMemberTabs = ['members', 'giuliani', 'meg', 'shanley', 'pamela', 'kate'];

    setShowProjects(showProjectTabs.includes(activeTab));
    setShowMembers(showMemberTabs.includes(activeTab));
  }, [activeTab]);

  const isActive = (tab) =>
    activeTab === tab ? 'underline font-bold decoration-[#B3A5A5] underline-offset-4' : '';

  return (
    <div className="w-full font-courier text-black flex items-stretch">
      <div className="flex items-start sticky top-0">
      {/* Sidebar */}
      <div className="w-[200px] sticky top-0 h-fit bg-[#F0F0F0] p-6 self-start">
        <div className="font-bold text-[18px] mb-1 leading-tight text-nowrap">The&lt;Script&gt;</div>
        <div className="text-[20px] text-black/70 mb-6">Showcase ’25</div>

        <nav className="flex flex-col gap-1 text-[18px] pl-2 mt-[80px]">
          <p className={`cursor-pointer hover:underline ${isActive('home')}`} onClick={() => setActiveTab('home')}>Home</p>
          <p className={`cursor-pointer hover:underline ${isActive('about')}`} onClick={() => setActiveTab('about')}>About us</p>

          <div>
            <p className={`cursor-pointer hover:underline ${isActive('projects')}`} onClick={() => {
              setActiveTab('projects');
              setShowProjects(true);
              setShowMembers(false);
            }}>Projects</p>
            {showProjects && (
              <div className="pl-4 flex flex-col text-[16px] mt-1">
                <p className={`cursor-pointer hover:underline ${isActive('software')}`} onClick={() => setActiveTab('software')}>Software</p>
                <p className={`cursor-pointer hover:underline ${isActive('arduino')}`} onClick={() => setActiveTab('arduino')}>Arduino</p>
              </div>
            )}
          </div>

          <div>
            <p className={`cursor-pointer hover:underline ${isActive('members')}`} onClick={() => {
              setActiveTab('members');
              setShowProjects(false);
              setShowMembers(true);
            }}>Members</p>
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

          <p className={`cursor-pointer hover:underline ${isActive('contact')}`} onClick={() => setActiveTab('contact')}>Contact</p>
        </nav>
      </div>

      {/* Main Content */}
        <div className="flex-1 pl-6 border-l border-gray-300 pr-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
