import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Components/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Show a loading toast notification
    const toastId = toast.loading('Logging in...');
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };
  
    try {
      const response = await fetch(`${BASE_URL}/login`, requestOptions);
  
      if (!response.ok) {
        throw new Error('Login failed!');
      }
  
      const result = await response.json();
      const token = result?.access_token;
      const userData = result?.data; // Extract user data from the response
  
      if (token) {
        localStorage.setItem('bearer_token', token);
        localStorage.setItem('userData', JSON.stringify(userData)); // Save user data to local storage
        login(token);
  
        // Dismiss the loading toast and show a success message
        toast.update(toastId, { render: 'Logged in successfully!', type: 'success', isLoading: false, autoClose: 3000 });
  
        // Delay navigation until the toast is closed
        setTimeout(() => navigate('/admin/dashboard'), 3000);
      } else {
        throw new Error('Token not received!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid email or password. Please try again.');
      
      // Update the loading toast to an error message
      toast.update(toastId, { render: 'Login failed. Please check your credentials.', type: 'error', isLoading: false, autoClose: 3000 });
    }
  };
  

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <div>
          <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="OAUTHC Logo" />
          <h2>OAUTHC Login</h2>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <div className='password-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
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
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <br />
        <p>
          <a href="/forgot-password">Forgot your password?</a>
        </p>
        <p>
          <Link to="/home">Return to Home</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
