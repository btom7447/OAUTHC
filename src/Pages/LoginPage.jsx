// src/Pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication logic for example purposes
    if (username === 'admin' && password === 'password') {
      onLogin(); 
      navigate('/admin/dashboard'); // Redirect to admin page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <div>
          <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="" />
          <h2>OAUTHC Login</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className='password-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className='password-toggle'
            onClick={() => setShowPassword(prev => !prev)}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
