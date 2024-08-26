/* eslint-disable import/first */

require('dotenv').config();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/index.css';
import './Styles/Mobile.css';
import './Styles/Tab-Small.css';
import './Styles/Tab-Medium.css';
import './Styles/Tab-Large.css';
import './Styles/Desktop-Small.css';
import './Styles/user-admin.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Dynamically set basename based on the environment
const basename = process.env.NODE_ENV === 'production' ? '/OAUTHC-WEBSITE' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
