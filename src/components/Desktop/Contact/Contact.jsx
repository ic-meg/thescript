import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import logo from '../../../assets/images/logo.png';
import phoneIcon from '../../../assets/icons/phone-call-1.png';
import emailIcon from '../../../assets/icons/gmail-1.png';
import githubIcon from '../../../assets/icons/social-1.png';
import socialIcon from '../../../assets/icons/image-2.png';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_ytdlgae',   // EmailJS Service ID
      'template_q9l7pie',  // EmailJS Template ID
      form.current,
      'FNZvvd_eF6N9oVTSj'    // EmailJS Public key
    )
    .then(() => {
      setSubmitStatus('success');
      form.current.reset();
    })
    .catch(() => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container">
      <div className="background-logo">
        <img src={logo} alt="The Script Logo" />
      </div>
      <div className="contact-content">
        {/* Link */}
        <div className="contact-info-section">
          <h1>Contact Us</h1>
          <p>
            We're ready to collaborate and answer any questions you may have. 
            Let's connect — we look forward to working with you!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <span>0912-345-6789</span>
            </div>
            <div className="contact-item">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <span>2025thescript@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src={socialIcon} alt="GitHub" className="contact-icon" />
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
              <img src={githubIcon} alt="Social Media" className="contact-icon" />
              <span>@The&lt;Script&gt;</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-section">
          <h2>Send us a message</h2>
          
          {submitStatus === 'success' && (
            <div className="confirmation-message success">
              Message sent successfully!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="confirmation-message error">
              Failed to send message. Please try again.
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label><span className="required-asterisk">*</span>Your Name:</label>
              <input type="text" name="user_name" required />
            </div>
            
            <div className="form-group">
              <label><span className="required-asterisk">*</span>Email:</label>
              <input type="email" name="user_email" required />
            </div>
            
            <div className="form-group">
              <label>Company (optional):</label>
              <input type="text" name="company" />
            </div>
            
            <div className="form-group">
              <label><span className="required-asterisk">*</span>Message:</label>
              <textarea name="message" required></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          <p className="form-footer">
            All messages get forwarded straight to our team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;