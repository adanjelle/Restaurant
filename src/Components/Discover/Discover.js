import React from 'react';
import './Discover.css';

const Discover = () => {
  return (
    <div className="story-container">
      <img
        src="https://www.amaica.co.ke/wp-content/uploads/2020/04/homestory.png"
        alt="Amaica"
        className="story-image"
      />
      <div className="story-text">
        <h2 className="story-header">
          Discover  <span className="highlight"> Our Story</span>
        </h2>
        <p>
          Al Baraka is one of the few formal restaurants in Wajir serving Authentic African Cuisine,
          including rare indigenous delicacies such as wild mushrooms, bambara nuts, groundnuts,
          all the seven indigenous Kenyan (Kienyeji) vegetables and tsiswa (white ants).
        </p>
      </div>
    </div>
  );
};

export default Discover;
