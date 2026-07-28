import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const rootEl = document.getElementById('root')
const initialPath = window.location.pathname

const app = (
  <StrictMode>
    <App initialPath={initialPath} />
  </StrictMode>
)

// Si el HTML viene pre-renderizado (build de producción) hidratamos;
// en desarrollo el contenedor está vacío y montamos normalmente.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
