import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.scss';
import { PageHeader } from './components/page-header/page-header.component';
import { ParticleGrid } from './components/particle-grid/particle-grid.component';
import { Menu } from './pages/menu/menu.page';
import { Javascript } from './pages/javascript/javascript.page';
import { MutableRefObject } from 'react';

export function App(): ReactElement {
  const [isSmall, setIsMobile]: [a: boolean, b: (b: boolean) => void] = useState(window.innerWidth <= 600);

  useEffect(() => {
    let timeout: number | undefined;
    let listener: (e: Event) => void = (e: Event) => {
      let ele: HTMLElement = e.target as HTMLElement;

      window.clearTimeout(timeout);

      timeout = window.setTimeout(() => {
        if (window.innerWidth > 600 && isSmall) setIsMobile(false);
        else if (window.innerWidth <= 600 && !isSmall) setIsMobile(true);
      }, 300);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  });

  return (
    <div className="page-block">
      <PageHeader small={isSmall} />
      <ParticleGrid countFull={350} countMobile={50} />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="js" element={<Javascript />} />
      </Routes>
    </div>
  );
}
