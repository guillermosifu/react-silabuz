import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextApp from './context/ContextApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextApp>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextApp>
  </BrowserRouter>
)
