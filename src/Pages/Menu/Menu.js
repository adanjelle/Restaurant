import React, { useState, useEffect } from 'react';
import './MENU.css';
import Search from '../../Components/Search/Search';

const backgroundImages = [
  'https://img.freepik.com/free-photo/beautiful-woman-preparing-romantic-dinner_23-2148960278.jpg?t=st=1722319079~exp=1722322679~hmac=517ba287e4a48666de6a939e90dd83c7f7bae6c5b4c75dbd2e90a09c7a36c46b&w=1380',
  'https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=sph',
  'https://img.freepik.com/free-photo/beautiful-couple-enjoying-their-time-together-home_23-2148960250.jpg?t=st=1722319750~exp=1722323350~hmac=734faf0811efc4e0df7bacc8eed8466ebef7d76deac4d3daef36660ac1d05f0a&w=1380',
  'https://img.freepik.com/free-photo/romantic-dinner-with-glasses-wine_23-2148960246.jpg?t=st=1722319812~exp=1722323412~hmac=29c1e8e6c98c7031ea62926caa2c532ea045bcb52734962681fd9a21c9c77a82&w=1380'
];

const quotes= [
  'The secret of success in life is to eat what you like and let the food fight it out inside.',
  'The only time to eat diet food is while you\'re waiting for the steak to cook.',
  'Life\'s too short to eat bad food.'
];

function Menu() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>(prevIndex + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="menu-header">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}></div>
        <div className="menu-title">
          <h1>Menu</h1>
          <p>All of our menus are available for takeout as well as dine-in. Please order by calling the restaurant<br></br> to place a takeout order. Menus change often with seasons and ingredients.</p>
          <div className="quote-container">
            <p className="quote">{quotes[currentImageIndex % quotes.length]}</p>
          </div>
        </div>
      </div>
      
      <div className="slideshow-container">
        <div className="slideshow">
          <div className="slide new-slide">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5d24dcf6e1930001a125c3/1571903461031-7OQELIOFTMI4NS0XN71H/HERO+Web-35.jpg?format=2500w" alt="New Slideshow 1" />
          </div>
          <div className="slide new-slide">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5d24dcf6e1930001a125c3/1571903493383-RMZGB6YOHC1DML1SPODL/HERO+Web-29.jpg?format=2500w" alt="New Slideshow 2" />
          </div>
          <div className="slide new-slide">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5d24dcf6e1930001a125c3/1571903531607-ILEULQ3EZY7MS4IVMPMF/HERO+Web-24.jpg?format=2500w" alt="New Slideshow 3" />
          </div>
          <div className="slide new-slide">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5d24dcf6e1930001a125c3/1571903549524-51WIIBGHKVABJ9OTSNCL/HERO+Web-22.jpg?format=2500w" alt="New Slideshow 4" />
          </div>
          <div className="slide new-slide">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5d24dcf6e1930001a125c3/1571903598945-6QB6L94GPDO58TOYO2X8/HERO+Web-16.jpg?format=2500w" alt="New Slideshow 5" />
          </div>
          <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/6091bbf8976156029ebfbac1/1721688694862-EBZQI5THG7LW5QJG7MEL/image-asset.jpeg?format=2500w" alt="Slideshow 1" />
          </div>
          <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/6091bbf8976156029ebfbac1/1721756919786-LQTL0ALNKW1ZTA05H1O2/image-asset.jpeg?format=2500w" alt="Slideshow 2" />
          </div>
          <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/6091bbf8976156029ebfbac1/1721493201594-CAMFY2JT8YK3QPNXLWXR/image-asset.jpeg?format=2500w" alt="Slideshow 3" />
          </div>
          <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/6091bbf8976156029ebfbac1/1721884147231-IVRWZPCTD8BCHMHPAQFH/image-asset.jpeg?format=2500w" alt="Slideshow 4" />
          </div>
          <div className="slide">
            <img src="https://images.squarespace-cdn.com/content/v1/6091bbf8976156029ebfbac1/1721688694862-EBZQI5THG7LW5QJG7MEL/image-asset.jpeg?format=2500w" alt="Slideshow 5" />
          </div>
        </div>
      </div>
      <Search />
    </>
  );
}

export default Menu;
