import React from 'react';
import './Kate.css'; 

const MemberProfile = ({ name, title, email, avatar, buttons, tools, hashtag }) => {
  return (
    <div className="kate-container font-vt323 text-black p-6 bg-[#f0f0f0]">
      {/* Hashtag */}
      <p className="text-lg mb-4">{hashtag}</p>

      {/* Profile */}
      <div className="flex items-center gap-6 mb-6">
        <img src={avatar} alt={`${name} Avatar`} className="w-[130px] h-[130px]" />
        <div>
          <h1 className="text-[20px]">{name}</h1>
          <p className="text-[20px]">{title}</p>
          <a href={`mailto:${email}`} className="text-[16px] underline">{email}</a>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 my-4">
            {buttons.map((btn, index) => (
                <button key={index} className="win95-btn">
                <img
                    src={btn.src}
                    alt={btn.alt}
                    className={`${index === 0 ? 'w-[30px] h-[30px]' : 'w-[20px] h-[20px]'}`}
                />
                </button>
            ))}
        </div>


      {/* Section Title */}
      <h2 className="text-[20px] font-bold font-['Courier_New',monospace] underline underline-offset-4 mb-2">
        {name.split(' ')[0]}'s Toolbox
      </h2>
      <p className="text-[14px] font-['Courier_New',monospace] text-black/70">
        A collection of languages and software {name.split(' ')[0]} knows and uses.
      </p>

      {/* Skills */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-10 gap-y-8 mt-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={tool.src} alt={tool.label} className="w-10 h-10" />
            <span className="tech-label">{tool.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberProfile;
