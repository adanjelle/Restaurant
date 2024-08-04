import React, { useState } from 'react';
import './Form.css';

const Form = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image || !price) {
      alert('All fields are required!');
      return;
    }

    const newItem = {
      name,
      image,
      price,
    };

    onAddItem(newItem);

    setName('');
    setImage('');
    setPrice('');
  };

  return (
    <form className="add-menu-item-form" onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className='button3' type="submit">Add Item</button>
    </form>
  );
};

export default Form;
