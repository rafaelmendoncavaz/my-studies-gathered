import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FruitContextProvider } from './context/FruitContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FruitContextProvider>
      <App />
    </FruitContextProvider>
  </React.StrictMode>,
)
