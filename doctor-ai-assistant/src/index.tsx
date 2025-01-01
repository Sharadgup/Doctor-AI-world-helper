// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css'; // or './index.css'
import App from './App'; // Correct path to App.tsx
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
