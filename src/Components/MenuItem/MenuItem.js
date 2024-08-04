import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../../Components/Form/Form';
import './Menu.css';
import CulturalHighlights from '../CulturalHighlights/CulturalHighlights';
import BuyerForm from '../../Components/BuyForm/BuyForm';

const MenuItem = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch('http://localhost:5000/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          throw new Error('Unexpected data structure');
        }
      })
      .catch((error) => console.error('Error fetching items:', error));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedItem(null);
  };

  const handleSubmit = (formData) => {
    fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Form submitted:', data);
        toast.success('You have successfully purchased it!');
        handleCloseForm();
      })
      .catch(error => console.error('Error submitting form:', error));
  };

  const addItem = (newItem) => {
    fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setItems([...items, data]); 
      })
      .catch(error => console.error('Error adding item:', error));
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const updatedItems = items.filter(item => item.id !== id);
          setItems(updatedItems);
        } else {
          return response.text().then(text => {
            throw new Error(`Failed to delete item: ${text}`);
          });
        }
      })
      .catch((error) => console.error('Error deleting item:', error));
  };

  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  return (
    <>
      <div className="order">
        <span>Order Your Food From AL Baraka</span>
      </div>
      <Form onAddItem={addItem} />
      <div className="menu_container">
        {items.map((item) => (
          <div key={item.id} className="menu-card">
            <div className="image-container">
              <img src={item.image} alt={`Item ${item.id}`} className="menu-item-image" />
              <button
                className="delete-button1"
                onClick={() => deleteItem(item.id)}
              >
                ×
              </button>
            </div>
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>Stars: {item.stars}</p>
              <p>Price: {item.price}</p>
              <button className="buy-button" onClick={() => handleBuyClick(item)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
      {showForm && (
        <BuyerForm onClose={handleCloseForm} onSubmit={handleSubmit} selectedItem={selectedItem} />
      )}
      <CulturalHighlights />
      <ToastContainer />
    </>
  );
};

export default MenuItem;
