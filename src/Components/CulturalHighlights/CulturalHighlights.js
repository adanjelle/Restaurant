import React from 'react';
import './CulturalHighlights.css';

const CulturalHighlights = () => {
  return (
    <>
      <h1 className="highlights-title">
        Latest <span className="highlighted">Articles</span>
      </h1>
      <div className="highlights-container">
        <div className="highlight-card">
          <a href='https://www.imdb.com/title/tt16259122/plotsummary/'><img
            src="https://www.amaica.co.ke/wp-content/uploads/2020/06/turkana9-400x250.jpg"
            alt="The Delicacies that Define The Turkana"
            className="highlight-image"
          /></a>
          
          <div className="highlight-text">
            <p>The delicacies that prove Turkana</p>
            <p className="highlight-date">1 September 2023 | <span>Kenyan Culture and Cuisine</span></p>
          </div>
        </div>
        <div className="highlight-card">
          <a href='https://artsandculture.google.com/story/turkana-ceremonial-celebrations-national-museums-of-kenya/yQWxkUwa0rXLXg?hl=en'>
          <img
            src="https://www.amaica.co.ke/wp-content/uploads/2020/06/800px-Turkana02-400x250.jpg"
            alt="The Turkana’s Rich Culture"
            className="highlight-image"
          /></a>
          
          <div className="highlight-text">
            <p>Turkana Rich Culture</p>
            <p className="highlight-date">19 September 2023 | <span>Kenyan Culture and Cuisine</span></p>
          </div>
        </div>
        <div className="highlight-card">
          < a href='https://www.imdb.com/title/tt16259122/plotsummary/'>
          <img
            src="https://www.amaica.co.ke/wp-content/uploads/2020/06/5543464740_fc127f3c38_b-400x250.jpg"
            alt="Celebrating Kenya's Diverse Culture"
            className="highlight-image"
          /></a>
          
          <div className="highlight-text">
            <p>Celebrating Kenya's Diverse Culture</p>
            <p className="highlight-date">18 January 2023 | <span>Kenyan Culture and Cuisine</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CulturalHighlights;
