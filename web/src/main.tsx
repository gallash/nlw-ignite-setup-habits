import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// As far as I understand, we don't change this script so often. When we are working
// with some component, we should change it in the App's script instead
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
