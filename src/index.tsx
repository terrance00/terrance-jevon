import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './index.scss';

const root = createRoot(document.getElementById('app-root') as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={location.pathname.split('/')[1] ?? ''}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
