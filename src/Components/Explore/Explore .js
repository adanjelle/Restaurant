import React from 'react';
import './Explore.css';
import {restaurants_list } from '../../restaurants/restaurants';
import MenuItem from '../MenuItem/MenuItem';
import Discover from '../Discover/Discover';
function Explore() {
  return (
    <div className="menu">
      <h2 className='menuh'>Our Menu</h2>
      <p className='p-menu'>
        Authentic Northern cuisine. 10 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className='restaurants-list'>
        {restaurants_list.map((item, index) => (
          <div key={index} className='restaurants-menu'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
     
      </div>
      <hr />
      <Discover/>
      <hr />
    </div>
  );
}

export default Explore;
