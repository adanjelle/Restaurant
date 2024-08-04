import React from 'react';
import './VisionMissionValues.css';


const VisionMissionValues = () => {
  return (
    <>
    <div className="vmv-container">
      <div className="vmv-card vision-card">
        <img src="https://www.amaica.co.ke/wp-content/uploads/2020/04/visionicon.png" alt="Our Vision" className="vmv-icon" />
        <div className="vmv-content">
          <h3>Our Vision</h3>
          <p>To be The African Brand of Choice for Cultural Fusion, Heritage and Diversity.</p>
        </div>
      </div>
      <div className="vmv-card mission-card">
        <img src="https://www.amaica.co.ke/wp-content/uploads/2020/04/missionicon.png" alt="Our Mission" className="vmv-icon" />
        <div className="vmv-content">
          <h3>Our Mission</h3>
          <p>To provide comprehensive and exceptional cultural experiences through promotion of African food, traditions, art and culture.</p>
        </div>
      </div>
      <div className="vmv-card values-card">
        <img src="https://www.amaica.co.ke/wp-content/uploads/2020/04/valuesicon.png" alt="Our Values" className="vmv-icon" />
        <div className="vmv-content">
          <h3>Our Values</h3>
          <p>
             Community Empowerment<br />
             Service Excellence<br />
             Quality Production<br />
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default VisionMissionValues;
