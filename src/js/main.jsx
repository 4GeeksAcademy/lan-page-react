import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*Estilos*/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Home from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
