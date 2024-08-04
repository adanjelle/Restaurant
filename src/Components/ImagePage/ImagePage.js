import React from 'react';
import './ImagePage.css';

const ImagePage = ({ location }) => {
  const { state } = location;
  const { images } = state || {};

  return (
    <div className="image-page-container">
      {images && images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image.src} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImagePage;
