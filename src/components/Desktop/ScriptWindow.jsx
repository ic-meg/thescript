import React, { useState } from 'react';

import SidebarLayout from './SidebarLayout';

import About from './About/About';

import { Projects, Software, Arduino } from './Projects';
import { Members, Gil, Meg, Ley, Pam, Kate } from './Members';

import Contact from './Contact/Contact';
import Home from './home';


const ScriptWindow = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
  
      case 'projects':
        return <Projects />;
  
      case 'software':
        return <Software />;
  
      case 'arduino':
        return <Arduino />;
  
      case 'members':
        return <Members />;
  
      case 'giuliani':
        return <Gil />;
  
      case 'meg':
        return <Meg />;
  
      case 'shanley':
        return <Ley />;
  
      case 'pamela':
        return <Pam />;
  
      case 'kate':
        return <Kate />;
  
      case 'contact':
        return <Contact />;
  
      default:
        return null;
    }
  };
  

  return activeTab === 'home' ? (
    <Home setActiveTab={setActiveTab} />
  ) : (
    <SidebarLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </SidebarLayout>
  );
};

export default ScriptWindow;
