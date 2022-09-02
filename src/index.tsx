import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.scss';

const root = createRoot(document.getElementById('app-root') as Element);

root.render(<App />);
