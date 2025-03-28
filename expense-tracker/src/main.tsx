import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element where the app will be rendered
const rootElement = document.getElementById('root') as HTMLElement;

// Render the App component inside the root element
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);