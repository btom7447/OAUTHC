import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle authentication here
    // If successful:
    navigate('/admin/dashboard');
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
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
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
            <p>
            <a href="/forgot-password">Forgot your password?</a>
            </p>
        </div>
    </div>
  );
};

export default AdminLogin;