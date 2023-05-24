import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const server = `https://api.coingecko.com/api/v3/coins`
export default server

