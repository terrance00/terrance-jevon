import { ChartData, ChartOptions } from 'chart.js';
import React, { MutableRefObject, ReactElement, useEffect, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import { FadeIn } from '../../helpers/fade-in.helper';
import './databases.page.scss';

export function Databases(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(ref);

  useEffect(() => {
    return () => {};
  });

  const opts: ChartOptions<'polarArea'> = {
    responsive: true,
    resizeDelay: 100,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        display: true
      },
      title: {
        text: 'Years of database experience',
        display: true,
        font: {
          weight: '100',
          size: 26
        }
      }
    }
  };

  const chartData: ChartData<'polarArea'> = {
    labels: ['MongoDB', 'Microsoft SQL Server', 'Postgres', 'Couchbase', 'Redis'],
    datasets: [
      {
        data: [3, 9, 6, 1, 3],
        backgroundColor: [
          'rgba(118, 245, 93, 0.5)',
          'rgba(245, 93, 93, 0.5)',
          'rgba(78, 95, 245, 0.5)',
          'rgba(159, 93, 245, 0.5)',
          'rgba(245, 184, 93, 0.5)'
        ]
      }
    ]
  };

  return (
    <>
      <div ref={ref} style={{ opacity: 0 }} className="databases page">
        <Chart type="polarArea" data={chartData} options={opts} style={{ marginLeft: '30px', marginRight: '30px' }}></Chart>
      </div>
    </>
  );
}
