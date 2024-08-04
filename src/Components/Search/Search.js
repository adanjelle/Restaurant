import React, { useState } from 'react';
import { Loop_list } from '../../restaurants/restaurants';
import './Search.css';
import BuyForm from '../../Components/BuyForm/BuyForm';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setSelectedItem(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setIsFormVisible(false);
    setSelectedItem(null);
    // Add any additional logic here for form submission (e.g., sending data to the server)
  };

  const filteredList = Loop_list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
      </div>
      <div className="categories-container">
        <h2 className="categories-heading">Categories</h2>
      </div>
      <div className="restaurants">
        {filteredList.map((item, index) => (
          <div key={index} className="restaurants-card">
            <a href="http://localhost:3000/home" target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} className="restaurant-image" />
              <p>{item.name}</p>
            </a>
            <button className="buy-button1" onClick={() => handleBuyClick(item)}>Buy</button>
          </div>
        ))}
      </div>
      {isFormVisible && (
        <BuyForm 
          onClose={handleCloseForm} 
          onSubmit={handleFormSubmit} 
          selectedItem={selectedItem} 
        />
      )}
    </div>
  );
}

export default Search;
