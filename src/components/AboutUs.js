import React, { useEffect, useState } from 'react';
import './style.css'; // Import CSS file for styling

function AboutUs() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    fetch('https://homy-6bvz.onrender.com/members')
      .then((response) => response.json())
      .then((data) => setMember(data));
  }, []);

  return (
    <div className="about-us-container">
      <h2>Tree Plantation Organization</h2>
      <p>
        Welcome to our organization dedicated to the noble cause of tree
        planting and environmental conservation. We believe in the power of
        trees to create sustainable ecosystems, mitigate climate change, and
        promote a healthier environment for generations to come.
      </p>
      <p>
        Our team comprises passionate individuals committed to nurturing and
        preserving nature's gifts. Through collaborative efforts, we engage in
        planting trees, educating communities about environmental stewardship,
        and fostering a sense of responsibility towards our planet.
      </p>

      <span>
        <h3>Here are the members and supporters:</h3>
      </span>

      <div className="image-grid">
        {member.map((data) => (
          <div key={data.id} className="member-card">
            <img src={data.image} alt="try again" />
            <div className="member-details">
              <strong>Name:</strong> {data.name}
              <br />
              <strong>Position:</strong> {data.position}
              <br />
              <strong>Description:</strong> {data.Description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
