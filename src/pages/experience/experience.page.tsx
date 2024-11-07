import React, { MutableRefObject, useRef } from 'react';
import { ReactElement } from 'react';
import { FadeIn } from '../../helpers/fade-in.helper';
import './experience.page.scss';
import { Chrono } from 'react-chrono';

export function Experience(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(ref);

  return (
    <div ref={ref} style={{ opacity: 0 }} title="Engineering Experience" className="experience page">
      <Chrono mode="VERTICAL"  cardLess={false} scrollable={true} disableAutoScrollOnClick={false} items={[
        {
          title: 'DYSIS',
          cardTitle: '2013 - 2017',
          cardSubtitle: 'Software engineer',
          cardDetailedText: 'A family owned business that exposed me to various web and desktop technologies. WinForms, WebForms, MVC, .NetFramework, .NetCore, Angular and MSSQL Server.',

        },
        {
          title: 'Trimble',
          cardTitle: '2017 - 2020',
          cardSubtitle: 'Software engineer',
          cardDetailedText: 'A silicon valley company where I specialized in GIS coding, RestAPIs, SPAs and mapping. Made the progression from intermediate to senior.'
        },
        {
          title: 'IoT.nxt',
          cardTitle: '2020 - 2022',
          cardSubtitle: 'Team lead | Senior software engineer',
          cardDetailedText: 'Team lead of front end and back end team. Microservices K8s environment. Angular and React front ends with .NetCore microservices.'
        },
        {
          title: 'BET Software',
          cardTitle: '2022 - PRESENT',
          cardSubtitle: 'Technical Lead',
          cardDetailedText: 'Technical lead of the finance team. Handling large transaction volumes for the HollywoodBets gaming company. .Net Core and .Net Framework environments. Angular and React front ends.'
        },
        {
          title: 'BSC Global',
          cardTitle: '2023 - PRESENT',
          cardSubtitle: 'Senior Software Engineer',
          cardDetailedText: 'Senior software engineer in the BSC Global team. Working on a large scale performance tracking software aimed at the production sector. .Net microservices infrastructure with React client facing.'
        }
      ]}></Chrono>
    </div>
  );
}
