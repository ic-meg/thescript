import React, { useState } from 'react';
import MonitorFrame from '../../components/MonitorFrame';
import desktopBg from '../../assets/images/desktop-bg.jpg';
import Taskbar from './taskbar';
import DesktopIcon from './DesktopIcon';
import WindowApp from './WindowApp';
import theScriptIcon from '../../assets/icons/the-script-shortcut.svg';
import ScriptWindow from './ScriptWindow';

const Desktop = () => {
  const [openApp, setOpenApp] = useState(null);
  const [minimizedApps, setMinimizedApps] = useState([]);

  const handleClickApp = (id) => {
    setOpenApp(id);
    setMinimizedApps((prev) => prev.filter((appId) => appId !== id));
  };

  const openApps = [
    openApp && {
      id: 'script',
      title: 'The <script>',
      icon: theScriptIcon,
    },
  ].filter(Boolean);

  return (
    <MonitorFrame>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={desktopBg}
          alt="Desktop Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute top-2 left-2 flex flex-col gap-3 z-10">
          <div onClick={() => handleClickApp('script')}>
            <DesktopIcon icon={theScriptIcon} label="The <script>" />
          </div>
        </div>

        {/* Open app window (shown only if not minimized) */}
        {openApp === 'script' && !minimizedApps.includes('script') && (
          <WindowApp
            title="The Script - Showcase 2025"
            icon={theScriptIcon}
            onClose={() => setOpenApp(null)}
            onMinimize={() =>
              setMinimizedApps((prev) => [...prev, 'script'])
            }
          >
            <ScriptWindow />
          </WindowApp>
        )}

        <Taskbar openApps={openApps} onClickApp={handleClickApp} />
      </div>
    </MonitorFrame>
  );
};

export default Desktop;
