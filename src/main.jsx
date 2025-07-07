// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './TempApp.jsx'
import './style.css'  // This line is important!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)