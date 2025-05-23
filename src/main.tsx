import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: "GTM-5RNJT63K"
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
