// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simple authentication logic for example purposes
//     if (username === 'admin' && password === 'password') {
//       onLogin(); 
//       navigate('/admin/dashboard'); // Redirect to admin page
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className='login-container'>
//       <form onSubmit={handleSubmit} className='login-form'>
//         <div>
//           <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="" />
//           <h2>OAUTHC Login</h2>
//         </div>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <div className='password-container'>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             className='password-toggle'
//             onClick={() => setShowPassword(prev => !prev)}
//           >
//             <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//           </button>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Components/AuthContext'; // Import your Auth context

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from the Auth context

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
      body: JSON.stringify(credentials), // Send the credentials in JSON format
    };

    try {
      const response = await fetch("https://oauthc.iccflifeskills.com.ng/v0.1/api/admin/login", requestOptions);

      // Check if the response status is OK
      if (!response.ok) {
        throw new Error('Login failed!');
      }

      const result = await response.json();
      const token = result?.access_token;

      // Check if the token is received
      if (token) {
        localStorage.setItem('bearer_token', token); // Store token in localStorage with key 'bearer_token'
        login(token); // Update the authentication context with the token
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
        <p>
          <a href="/forgot-password">Forgot your password?</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;