import React, { useState, useEffect } from 'react';
import './OurStory.css';

const backgroundImages = [
  'https://www.amaica.co.ke/wp-content/uploads/2020/04/ourstorybanner.jpg',
  'https://img.freepik.com/free-photo/african-woman-is-cutting-red-pepper-kitchen-desk_8353-10303.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid',
  'https://images.pexels.com/photos/5638644/pexels-photo-5638644.jpeg?auto=compress&cs=tinysrgb&w=800'
];

const quotes = [
  'Our Story',
  '"One cannot think well, love well, sleep well, if one has not dined well."',
  '"It is when we persist in viewing the tainted past uncritically that we continue to sully the present."',
  ' "Your diet is a bank account."'
];

function OurStory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="our-story-wrapper">
        <div className="our-story-container" style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
          <div className="our-story-content">
            <em>{quotes[currentIndex]}</em>
          </div>
        </div>
        <div className="our-story-text">
          Albaraka is an indigenous Kenyan five-star restaurant chain that provides an engaging cultural experience for its customers. Amaica is renowned for its authentic African food, service excellence based on African hospitality standards, set in an African environment to enhance the customer experience.
          <br /><br />
          From its inception in 2006, Amaica prides itself in providing customers with healthy, balanced and unique African dishes from around the Continent. Amaica caters to a wide variety of palettes and has meals generated from communities’ around the African Continent; from appetizing starters to delectable desserts. Amaica also plays host to patrons across the demographic divide including corporates, mature crowds, young adults, geriatrics and children. We offer the perfect environment for special occasions as well, whether celebrated in a small groups or large parties.
        </div>
      </div>
    </>
  );
}

export default OurStory;
