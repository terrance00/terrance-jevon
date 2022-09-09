import React, { ReactElement } from 'react';
import './app.scss';
import { PageHeader } from './components/page-header/page-header.component';
import { ParticleGrid } from './components/particle-grid/particle-grid.component';

export function App(): ReactElement {
  return (
    <div className="page-block">
      <PageHeader currentWidth={200}/>
      <ParticleGrid />
    </div>
  );
}
