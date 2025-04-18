import React from 'react';

const Arduino = () => {
  return (
    <div className="w-full h-full bg-[#] px-10 py-10 font-courier text-black leading-relaxed">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-2">Smart Coffee Machine</h1>
      <h2 className="text-xl font-bold mb-6">Developed by The &lt;Script&gt; Team</h2>

      {/* Intro Paragraph */}
      <p className="mb-4 text-justify">
        As a team of developers passionate about both hardware and software, we built a Smart Coffee Machine that merges everyday convenience with automation. This project showcases our ability to work with microcontrollers, payment integration, and UI design — all while making sure nobody misses their caffeine fix.
      </p>
      <p className="mb-8 text-justify">
        Our coffee machine accepts both coin and GCash payments, features a touchscreen interface, and allows users to choose between 3-in-1 or black coffee with customizable sugar and creamer options. With Arduino handling the logic, it brings together real-world interaction and automation in one machine.
      </p>

      {/*  How It Works */}
      <h3 className="text-2xl font-bold mt-6 mb-2">How It Works</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Accepts payment via coin slot or GCash scan</li>
        <li>Users interact with a touchscreen to select coffee options</li>
        <li>Arduino processes the input and triggers dispensing via relays</li>
        <li>The drink is dispensed automatically and the system resets</li>
      </ul>

      {/* Video hereee */}
      <div className="mb-6">
        <img
          src="/assets/images/smart-coffee-machine.jpg"
          alt="Smart Coffee Machine Project"
          className="w-full max-w-xl mx-auto rounded shadow"
        />
        <p className="text-sm text-center mt-2">
          <em>Figure 1:</em> Smart Coffee Machine — Touch UI and hardware setup
        </p>
      </div>

      {/* Video Demo Links  heree */}
      <h3 className="text-xl font-bold mt-10 mb-2">Demo Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            VIDEO – Touchscreen Coffee Ordering Walkthrough
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            VIDEO – GCash + Coin Payment Integration Test
          </a>
        </li>
      </ul>

      {/* Closing Note */}
      <p className="mt-8 text-justify">
        This project is a result of teamwork, creativity, and technical problem-solving. We're currently working on refining its design and functionality — adding features like cup detection, heating elements, and improved UI. Stay tuned for updates as we continue brewing up something awesome.
      </p>
    </div>
  );
};

export default Arduino;
