import React from 'react';
import './Contact.css';
import logo from '../../../assets/images/logo.png';
import phoneIcon from '../../../assets/icons/phone-call-1.png';
import emailIcon from '../../../assets/icons/gmail-1.png';
import githubIcon from '../../../assets/icons/social-1.png';
import socialIcon from '../../../assets/icons/image-2.png';

const Contact = () => {
    return (
        <div className="contact-container ">
            <div className="background-logo">
                <img src={logo} alt="The Script Logo" />
            </div>
            <div className="contact-content "> <br />
                <h1>Contact Us</h1>
                <p>
                    We're ready to collaborate and answer any questions you may have. 
                    Let's connect—we look forward to working with you!
                </p>
                
                <div className="contact-details">
                    <div className="contact-item">
                        <img src={phoneIcon} alt="Phone" className="contact-icon" />
                        <span>0912-345-6789</span>
                    </div>
                    <div className="contact-item">
                        <img src={emailIcon} alt="Email" className="contact-icon" />
                        <span>the&lt;script&gt;@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <img src={githubIcon} alt="GitHub" className="contact-icon" />
                        <a 
                            href="https://github.com/ic-meg/our-portfolio" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 underline"
                        >
                            https://github.com/ic-meg/our-portfolio
                        </a>
                    </div>
                    <div className="contact-item">
                        <img src={socialIcon} alt="Social Media" className="contact-icon" />
                        <span>@The&lt;Script&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;