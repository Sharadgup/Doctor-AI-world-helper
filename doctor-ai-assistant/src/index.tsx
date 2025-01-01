import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './styles/globals.css'; // or './index.css'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Use ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
