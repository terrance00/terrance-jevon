import React, { MutableRefObject, useEffect, useRef } from 'react';
import { ReactElement } from 'react';
import './particle-grid.component.scss';
import { DrawParticleGrid } from './particle-grid.helper';

export function ParticleGrid(props: { countFull: number; countSmall: number; countMedium: number }): ReactElement {
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    DrawParticleGrid(canvasRef.current, props.countFull, props.countSmall, props.countMedium);
  });

  return (
    <div className="particle-grid">
      <canvas id='particle-canvas' ref={canvasRef}></canvas>
    </div>
  );
}
