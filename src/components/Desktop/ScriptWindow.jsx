import React from 'react';

const ScriptWindow = () => {
  return (
    <div className="w-full h-full bg-[#EFF6F8] text-black font-['Courier_New_Custom',monospace] flex flex-col items-center justify-center text-center px-4 py-6 gap-6">
      <nav className="text-[16px] sm:text-[18px] md:text-[20px] space-x-4 flex flex-wrap justify-center">
        <button className="hover:underline underline-offset-2">about us</button>
        <button className="hover:underline underline-offset-2">projects</button>
        <button className="hover:underline underline-offset-2">members</button>
        <button className="hover:underline underline-offset-2">contact</button>
      </nav>

      <div>
        <h1 className="text-4xl sm:text-5xl font-bold">The &lt;Script&gt;</h1>
        <p className="text-sm mt-2 font-semibold">Learning. Building. Innovating.</p>
      </div>
    </div>
  );
};

export default ScriptWindow;