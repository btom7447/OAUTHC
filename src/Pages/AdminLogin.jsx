import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request options for the fetch API
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials), // Use form data to match server-side format
      redirect: 'follow' // Optional, for handling redirects if necessary
    };

    try {
      const response = await fetch("https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/login", requestOptions);

      // Handle non-200 HTTP response statuses
      if (!response.ok) {
        throw new Error('Login failed!');
      }

      // Parse JSON response
      const result = await response.json();
      const token = result?.access_token;

      // Check for the access token in the server response
      if (token) {
        localStorage.setItem('token', token); // Store token in localStorage
        login(); // Update context state to indicate successful login
        navigate('/admin/dashboard'); // Redirect to the admin dashboard
      } else {
        throw new Error('Token not received!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div>
          <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="OAUTHC Logo" />
          <h2>OAUTHC Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>
          <a href="/forgot-password">Forgot your password?</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
