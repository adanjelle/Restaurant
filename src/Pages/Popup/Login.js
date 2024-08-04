import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password, name };

    try {
      const response = await fetch('http://localhost:5000/UsersData');
      const users = await response.json();

      if (currentState === "Sign Up") {
        // Check if the user already exists
        const userExists = users.find((u) => u.email === email);
        if (userExists) {
          alert('User already exists. Please log in.');
          setCurrentState("Login");
        } else {
          // Create a new user
          await fetch('http://localhost:5000/UsersData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
          alert('Sign Up successful');
          setShowLogin(false);
          history.push('/');
        }
      } else {
        // Check for login
        const existingUser = users.find((u) => u.email === email && u.password === password);
        if (existingUser) {
          alert('Login successful');
          setShowLogin(false);
          history.push('/');
        } else {
          alert('Invalid email or password');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login'>
      <form className='login-container' onSubmit={handleSubmit}>
        <div className='login-title'>
          <h2>{currentState}</h2>
          <div className='close-icon' onClick={() => setShowLogin(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
        <div className='login-inputs'>
          {currentState === "Sign Up" && (
            <input 
              type="text" 
              placeholder='Your Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          )}
          <input 
            type="email" 
            placeholder='Your Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button className="button2" type="submit">{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='toggle-state'>
          <p>
            {currentState === "Login" ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setCurrentState(currentState === "Login" ? "Sign Up" : "Login")}>
              {currentState === "Login" ? " Sign Up" : " Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
