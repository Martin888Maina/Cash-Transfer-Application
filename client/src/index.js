//import the react library
import React from 'react';
//import he react dom which is used to render the react components
import ReactDOM from 'react-dom/client';
//import the index.css styling file
import './index.css';
// Import the main App component
import App from './App';
// Import for web vitals reporting
import reportWebVitals from './reportWebVitals';

// Create a root element using ReactDOM. The `document.getElementById('root')` selects the div with id 'root' in index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped inside React.StrictMode to ensure it adheres to best practices
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
