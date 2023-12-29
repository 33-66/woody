import React from 'react';
import './style.css'; // Import the CSS file

function Footer() {
  return (
    <div className="footer">
      <h2 className="title">Contact us:</h2>

      <div className="contact-info">
        <p className="info">Phone:</p>
        <a href="tel:+254745654" className="link">+254-745-654</a>
      </div>

      <div className="contact-info">
        <p className="info">Email:</p>
        <a href="mailto:woodland243@gmail.com" className="link">woodland243@gmail.com</a>
      </div>

      <p className="additional-text">
        Reach out to us for any inquiries or assistance. We'd love to hear from you!
      </p>
    </div>
  );
}

export default Footer;
