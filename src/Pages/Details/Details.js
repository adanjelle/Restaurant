import React, { useEffect, useState } from 'react';
import './Details.css';

const Details = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/UserDetails')
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching details:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/UserDetails/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setDetails(details.filter(detail => detail.id !== id));
        
      })
      .catch(error => console.error('Error deleting entry:', error));
  };

  return (
    <div className="details-container">
      <h2 style={{color:"red", fontSize:"20px",fontStyle:"italic" }}>Submitted Details</h2>
      <table className="details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {details.map(detail => (
            <tr key={detail.id}>
              <td>{detail.name}</td>
              <td>{detail.email}</td>
              <td>{detail.phone}</td>
              <td>{detail.message}</td>
              <td>
              <button
  style={{
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px'
  }}
  onClick={() => handleDelete(detail.id)}
>
  Delete
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
