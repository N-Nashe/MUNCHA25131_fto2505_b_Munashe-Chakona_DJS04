import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// Entrypoint
// - If the app doesn't render, open the browser at the dev server URL (see the terminal output)
// - Use React DevTools for component inspection and the console for logs
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
