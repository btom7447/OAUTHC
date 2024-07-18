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
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/OAUTHC-WEBSITE">
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
