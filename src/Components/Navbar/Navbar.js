import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <h1 style={{ fontSize: "24px", color: "tomato", width: "150px" }}>Al Baraka</h1>
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setMenu("order")} className={menu === "order" ? "active" : ""}>
          <Link to="/Order">Order</Link>
        </li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          <Link to="/Contact">Contact us</Link>
        </li>
        <li onClick={() => setMenu("admin")} className={menu === "admin" ? "active" : ""}>
          <Link to="/Admin">Admin</Link>
        </li>
        <li onClick={() => setMenu("details")} className={menu === "details" ? "active" : ""}>
          <Link to="/Details">Details</Link>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src="/restaurants/search-img.png" alt='Search' className='search' style={{ height: "30px" }} />
        <div className='basket'>
          <img src="/restaurants/basket-icon.png" style={{ height: "30px" }} alt='Basket' />
          <div className='dot'></div>
        </div>
        <button aria-label="Sign In" onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
