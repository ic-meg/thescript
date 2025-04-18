import React from 'react';
import './Showcase2025.css';

const Members = () => {
    return (
        <div className="space-y-4 pb-20">
            <div className="header">The Script - Showcase 2025</div>

            <div className="main-content flex-1">
                <div className="intro mb-4">
                    <h3 className="text-xl font-semibold">Behind the Screens</h3>
                    <p>
                        We make things harder than they need to be, suffer through our own code,
                        and still manage to laugh about it (eventually)...
                    </p>
                </div>

                {/* Example Profile Section */}
                <div className="profile flex items-center space-x-4">
                    <img
                        src="profile.png"
                        alt="Giuliani Calais"
                        className="w-20 h-20 object-cover rounded-full"
                    />
                    <p>
                        <strong>Giuliani Calais</strong><br />
                        Frontend Developer, Designer<br />
                        gilcalais@gmail.com
                    </p>
                    
                </div>

                {/* Add more profiles here */}
            </div>
            <div class="line">
                <p>//////////////////////////////////////////////////////////////////////////</p>
            </div>

            <div class="member-1">
                <p><strong>Giuliani Calais</strong><br />
                    Frontend Developer, Designer<br />
                    gilcalais@gmail.com</p>
                    <p><strong>Giuliani Calais</strong><br />
                    Frontend Developer, Designer<br />
                    gilcalais@gmail.com</p>
            </div>
            <div class="member-2">
                <p><strong>Giuliani Calais</strong><br />
                    Frontend Developer, Designer<br />
                    gilcalais@gmail.com</p>
                    <p><strong>Giuliani Calais</strong><br />
                    Frontend Developer, Designer<br />
                    gilcalais@gmail.com</p>
            </div>
                    

                    
            <div className="footer mt-10">© 2025 The Script</div>
        </div>
    );
};

export default Members;
