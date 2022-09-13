import React, { ReactElement, useState } from 'react';
import { Location, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './app.scss';
import { BackButton } from './components/back-button/back-button.component';
import { PageFooter } from './components/page-footer/page-footer.component';
import { PageHeader } from './components/page-header/page-header.component';
import { ParticleGrid } from './components/particle-grid/particle-grid.component';
import { About } from './pages/about/about.page';
import { Databases } from './pages/databases/databases.page';
import { Experience } from './pages/experience/experience.page';
import { Frameworks } from './pages/frameworks/frameworks.page';
import { Languages } from './pages/languages/languages.page';
import { Menu } from './pages/menu/menu.page';
import { Microservices } from './pages/microservices/microservices.page';

export function App(): ReactElement {
  let isSmall: boolean = false;

  const location: Location = useLocation();

  if (!!location.pathname.split('/')[1]) {
    isSmall = true;
  }

  return (
    <div className="page-block">
      { !location.pathname.split('/')[1] ? <></> : <BackButton /> }
      <PageHeader small={isSmall} />
      <ParticleGrid countFull={350} countSmall={50} countMedium={100} />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/databases" element={<Databases />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/microservices" element={<Microservices />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <PageFooter />
    </div>
  );
}
