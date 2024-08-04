import React from 'react';
import  './Header.css'
function Header() {
  return (
    <div className='header'>
     <div className='header-content'>
     <h2>Serving Authentic Northern Cuisine</h2>
     <p>Elevate Your Dining Experience – Discover Our Exquisite Menu at Al Baraka, and transports customers through a truly memorable cultural experience.
     </p>
     < a href='http://localhost:3000/menu'><button className='button4'>View Menu</button></a>
     </div>
    </div>
  )
}

export default Header