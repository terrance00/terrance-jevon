import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from './app';
import './index.scss';
import { ChartJsRegisterHelper } from './helpers/chart-js-register.helper';

const root = createRoot(document.getElementById('app-root') as Element);

ChartJsRegisterHelper.Register();

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
