import React from 'react';

import { createRoot } from 'react-dom/client';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/600.css';
import Modal from 'react-modal';

import App from './App.tsx';
import './index.css';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
