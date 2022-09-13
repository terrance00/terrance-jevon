import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from './app';
import './index.scss';

const root = createRoot(document.getElementById('app-root') as Element);

root.render(
  <HashRouter basename={location.pathname.split('/')[1] ?? ''}>
    <App />
  </HashRouter>
);
