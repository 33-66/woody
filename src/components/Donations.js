import React from 'react';
import './style.css';

function Donations() {
  return (
    <div className="donations-container">
      <header>
        <h1>Support Our Cause</h1>
        <p>Your donations help us in our mission to plant trees and conserve the environment.</p>
        <p>We greatly appreciate your support!</p>
      </header>

      <section className="donation-info">
        <div className="donation-description">
          <h2>Why Donate?</h2>
          <p>
            Your donations go directly towards funding tree planting initiatives, environmental education programs,
            and the preservation of green spaces in our communities.
          </p>
        </div>
        <div className="donation-options">
          <h2>How to Donate</h2>
          <p>
            Choose one of the following methods to contribute:
          </p>
          <ul>
            <li>Online via our secure donation platform.</li>
            <li>By mail with a check or money order.</li>
            <li>In-person at our office or events.</li>
          </ul>
        </div>
      </section>

      <figure>
        <img
          src="https://images.pexels.com/photos/6347730/pexels-photo-6347730.jpeg"
          alt="Tree planting"
          className="donation-image"
        />
        <figcaption>
          <em>Help us make a greener world. Please donate to our organization.</em>
        </figcaption>
      </figure>

      <div className="donate-button-container">
        <button className="donate-btn">Donate Now</button>
      </div>

      <footer>
        <p>Thank you for supporting our efforts to create a sustainable environment for future generations!</p>
      </footer>
    </div>
  );
}

export default Donations;
