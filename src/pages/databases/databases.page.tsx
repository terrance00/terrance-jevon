import { Chart, ChartConfiguration, ChartData, ChartItem } from 'chart.js';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { ReactElement } from 'react';
import { FadeIn } from '../../helpers/fade-in.helper';
import './databases.page.scss';

export function Databases(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

  FadeIn(ref);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chartData: ChartData<'polarArea'> = {
      labels: ['MongoDB', 'Microsoft SQL Server', 'Postgres', 'Couchbase', 'Redis'],
      datasets: [
        {
          label: 'MongoDB',
          data: [3]
        },
        {
          label: 'Microsoft SQL Server',
          data: [9]
        },
        {
          label: 'Postgres',
          data: [6]
        },
        {
          label: 'Couchbase',
          data: [1]
        },
        {
          label: 'Redis',
          data: [3]
        }
      ]
    };

    const chartOpts: ChartConfiguration = {
      type: 'polarArea',
      data: chartData,
      options: {
        responsive: true,
        resizeDelay: 100,
        maintainAspectRatio: false
      }
    };

    //const chart = new Chart(canvasRef.current, chartOpts);
  });

  return (
    <div ref={ref} style={{ opacity: 0 }} className="databases page">
    </div>
  );
}
