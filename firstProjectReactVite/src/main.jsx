import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // Cria e renderiza a aplicação React no elemento HTML que tiver esse nome/ID (no nosso caso, no index.html)
  <StrictMode>
    <App />
  </StrictMode>,
)
