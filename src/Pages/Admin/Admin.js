import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/data/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setUserData(prevData => prevData.filter(user => user.id !== id));
      } else {
        console.error('Error deleting data');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="admin-panel">
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Food</th>
            <th>Price</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.food}</td>
              <td>{user.price}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
