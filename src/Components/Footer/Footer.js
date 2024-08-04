import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'red' : 'dark'));
  };

  return (
    <>
      <div className={`footer ${mode}`}>
        <div className='footer-content'>
          <div className='footer-left'>
            <h1>Al Baraka</h1>
            <p>Get instant exposure to millions of diners online and boost revenue by signing up to Eat App's network integrated with big names like Google, TripAdvisor, Time Out, and more.</p>
            <div className='footer-icons'>
              <a href='https://youtube.com/shorts/uDQexwjqY14'>
                <img className='icon' src="https://img.freepik.com/free-photo/transparent-glass-bubble-with-youtube-logo-inside-it_125540-4266.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid" alt='YouTube' />
              </a>
              <a href='https://www.facebook.com/'>
                <img className='icon' src="https://img.freepik.com/free-psd/realistic-facebook-3d-icon-isolated-transparent-background_125540-7115.jpg?uid=R154277615&ga=GA1.1.1916917109.1719641550&semt=ais_hybrid" alt='Facebook' />
              </a>
              <a href='https://github.com/topics/login'>
                <img className='icon' src="https://cdn-icons-png.flaticon.com/128/25/25657.png" alt='GitHub' />
              </a>
            </div>
          </div>

          <div className='footer-center'>
            <h2> LINKS </h2>
            <ul>
             <a href='http://localhost:3000/'><li>Home</li></a>
             <a href='http://localhost:3000/menu'><li>Menu</li></a>
              < a href='http://localhost:3000/about'> <li>About us</li></a>
                < a href='http://localhost:3000/Contact'><li>Contact</li></a>
            </ul>
          </div>

          <div className='footer-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+254-07-27-77-4164</li>
              <li>albaraka.com</li>
            </ul>
          </div>
        </div>
        
       <div className='footer-toggle'>
      <input type="text"  readOnly />
      <button onClick={toggleMode}>{mode === 'dark' ? 'Dark Mode' : 'Red Mode'}</button>
      </div>
        
        <hr />
        
        <p className='copyright'>
          Copyright 2024 @Al baraka.com - All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;






