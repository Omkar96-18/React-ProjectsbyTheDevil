import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { weatherStore } from './store/weatherStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={weatherStore}>
      <App />
    </Provider>
  </StrictMode>,
)
