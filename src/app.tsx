import React, { ReactElement } from 'react';
import './app.scss';
import { ParticleGrid } from './components/particle-grid/particle-grid.component';

export function App(): ReactElement {
  return (
    <div className="page-block">
      <ParticleGrid />
    </div>
  );
}
