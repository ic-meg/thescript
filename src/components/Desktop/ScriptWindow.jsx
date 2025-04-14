import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Members from './Members';
import Contact from './Contact';

const ScriptWindow = () => {
  const [activeTab, setActiveTab] = useState('home');

 const renderContent = () => {
  switch (activeTab) {
    case 'about':
      return <About setActiveTab={setActiveTab} />;
    case 'projects':
      return <Projects setActiveTab={setActiveTab} />;
    case 'members':
      return <Members setActiveTab={setActiveTab} />;
    case 'contact':
      return <Contact setActiveTab={setActiveTab} />;
    default:
      return (
        <div className="w-full h-full bg-[#EFF6F8] text-black font-['Courier_New_Custom',monospace] flex flex-col items-center justify-center text-center px-4 py-6 gap-6">
          <nav className="text-[16px] sm:text-[18px] md:text-[20px] space-x-4 flex flex-wrap justify-center">
            <button onClick={() => setActiveTab('about')} className="hover:underline underline-offset-2">about us</button>
            <button onClick={() => setActiveTab('projects')} className="hover:underline underline-offset-2">projects</button>
            <button onClick={() => setActiveTab('members')} className="hover:underline underline-offset-2">members</button>
            <button onClick={() => setActiveTab('contact')} className="hover:underline underline-offset-2">contact</button>
          </nav>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">The &lt;Script&gt;</h1>
            <p className="text-sm mt-2 font-semibold">Learning. Building. Innovating.</p>
          </div>
        </div>
      );
  }
};

  return (
    <div className="w-full h-full bg-[#EFF6F8] text-black font-['Courier_New_Custom',monospace] px-4 py-6">
      {renderContent()}
    </div>
  );
};

export default ScriptWindow;
