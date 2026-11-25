import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import global styles FIRST. Later CSS wins when selectors are equally specific,
// so component styles (imported inside App) must come after these.
import './styles/tokens.css';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);