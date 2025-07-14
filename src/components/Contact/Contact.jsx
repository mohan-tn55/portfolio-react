import React, { useState } from 'react';
import './Contact.css';

// Message Modal Component (can be moved to its own file if reused often)
const MessageModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="message-modal-overlay">
      <div className="message-modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace with your actual Web3Forms access key
    formData.append("access_key", "508a5f14-6394-42f5-9c8c-0d4ea6f08897");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((response) => response.json());

      if (res.success) {
        setMessageContent(res.message);
        setShowMessage(true);
        event.target.reset(); // Clear the form
      } else {
        setMessageContent("Failed to send message: " + (res.message || "Unknown error"));
        setShowMessage(true);
      }
    } catch (error) {
      setMessageContent("An error occurred while sending your message. Please try again later.");
      setShowMessage(true);
      console.error("Submission error:", error);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    setMessageContent('');
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:your_email@example.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <p>smartmohan2512@gmail.com</p>
            </div>
            <div className="contact-detail">
              <a href="tel:+919047706710">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.1.75.32 1.48.64 2.19a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.71.32 1.44.54 2.19.64a2 2 0 0 1 1.72 2v3z"></path>
                </svg>
              </a>
              <p>9047706710</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' id="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' id="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message' id="message" required />
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
      <MessageModal message={messageContent} onClose={closeMessage} />
    </div>
  );
};

export default Contact;