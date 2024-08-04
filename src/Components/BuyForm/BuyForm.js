import React, { useState, useEffect } from 'react';
import './BuyForm.css';

const BuyerForm = ({ onClose, onSubmit, selectedItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    food: '',
    price: ''
  });

  useEffect(() => {
    if (selectedItem) {
      setFormData((prevData) => ({
        ...prevData,
        food: selectedItem.name,
        price: selectedItem.price
      }));
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Buyer Details</h2>
        <form className='form1' onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
          <div>
            <label>Food:</label>
            <input type="text" name="food" value={formData.food} readOnly />
          </div>
          <div>
            <label>Price:</label>
            <input type="text" name="price" value={formData.price} readOnly />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BuyerForm;
