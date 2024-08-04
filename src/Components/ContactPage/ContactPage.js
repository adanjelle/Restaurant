// ContactPage.jsx
import React, { useState, useEffect } from 'react';
import './ContactPage.css'; 

const images = [
  'https://www.amaica.co.ke/wp-content/uploads/2020/04/contactbanner.jpg',
  'https://img.freepik.com/free-photo/white-cloud-blue-sky_1203-9447.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid',
  'https://img.freepik.com/free-photo/digital-art-dark-cosmic-night-sky_23-2151700785.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid',
  'https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-4082.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid',
  'https://img.freepik.com/premium-photo/moonlit-bliss-ar-c_839793-140375.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid',
];

const ContactPage = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    };

    const intervalId = setInterval(changeImage, 3000); // Change image every 5 seconds for testing. Change to desired minutes.

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="contact-content">Contact</div>
    </div>
  );
};

export default ContactPage;
