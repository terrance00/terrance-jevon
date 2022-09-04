import React, { MutableRefObject, useEffect, useRef } from 'react';
import { ReactElement } from 'react';
import './particle-grid.component.scss';
import { DrawParticleGrid } from '../particle-grid.helper';

export function ParticleGrid(): ReactElement {
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    DrawParticleGrid(canvasRef.current);
  });

  return (
    <div className="particle-grid">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
