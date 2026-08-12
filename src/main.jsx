import { StrictMode } from 'react'//Avisa quando ter algum erro no código
import { createRoot } from 'react-dom/client'//Diz onde é a raiz na página html
import './index.css' //importa o estilo da index.css
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
