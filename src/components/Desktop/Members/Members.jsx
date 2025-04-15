import React from 'react';

const Members = () => {
    return (
        <div className="space-y-4 pb-20"> {/* Add bottom padding too */}
        <h2 className="text-2xl font-bold">About Us</h2>
        <p>
          We are The &lt;Script&gt; team. Passionate about tech, retro design, and innovation.
        </p>
        {/* Add a bunch of content to force scroll */}
        {[...Array(30)].map((_, i) => (
          <p key={i}>This is test content line #{i + 1}</p>
        ))}
      </div>
    );
};

export default Members;