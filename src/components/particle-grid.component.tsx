import React, { MutableRefObject, useEffect, useRef } from 'react';
import { ReactElement } from 'react';
import './particle-grid.component.scss';
import Paper from 'paper';

export function ParticleGrid(): ReactElement {
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    Paper.setup(canvasRef.current);

    let path = new Paper.Path(new Paper.Point(0,0));

    path.strokeWidth = 10;
    path.strokeColor = new Paper.Color('black');

    path.moveTo(new Paper.Point(10, 10));
  });

  return (
    <div className="particle-grid">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
