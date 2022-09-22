import React, { MutableRefObject, useRef } from 'react';
import { ReactElement } from 'react';
import { AccordionData } from '../../components/accordion/accordion-data.interface';
import { Accordion } from '../../components/accordion/accordion.component';
import { FadeIn } from '../../helpers/fade-in.helper';
import './languages.page.scss';

export function Languages(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(ref);

  const accordionData: AccordionData[] = [
    {
      heading: 'C#',
      imgAlt: 'C# Logo',
      imgSrc: 'assets/logos/c-sharp.png',
      subHeading: "Microsoft's flagship coding language",
      texts: [
        'Close to a decade of experience',
        '.Net Framework',
        '.Net Core',
        '.Net 6+',
        'Desktop development',
        'Web development',
        'API development'
      ],
      open: true
    },
    {
      heading: 'JS',
      imgAlt: 'Javascript Logo',
      imgSrc: 'assets/logos/javascript.png',
      subHeading: 'Scripting browsers and servers',
      texts: ['Close to a decade of experience', 'Browser JS', 'DOM manipulation', 'NodeJS server-side', 'Unit tests'],
      open: true
    },
    {
      heading: 'TS',
      imgAlt: 'TS Logo',
      imgSrc: 'assets/logos/typescript.png',
      subHeading: 'Bringing types to the typeless',
      texts: ['Half a decade of experience', 'Angular', 'React', 'Vanilla JS with type safety', 'Compilation using webpack', 'Keep my JS teams from making mistakes'],
      open: true
    },
    {
      heading: 'HTML',
      imgAlt: 'HTML5 Logo',
      imgSrc: 'assets/logos/html5.png',
      subHeading: 'Building web pages',
      texts: ['Close to a decade of experience', 'Built hundreds of pages for many sites', 'Experience with more sophisticated elements like canvas', 'Accessibility'],
      open: true
    },
    {
      heading: 'CSS',
      imgAlt: 'CSS 3 Logo',
      imgSrc: 'assets/logos/css3.png',
      subHeading: 'Making web pages pretty',
      texts: ['Most of this sites styling is done with normal CSS (With sass)', 'Responsive design', 'Animations'],
      open: true
    },
    {
      heading: 'SCSS',
      imgAlt: 'SASS Logo',
      imgSrc: 'assets/logos/scss.png',
      subHeading: 'Bringing scalability to styling',
      texts: ['Reuse and compartmentalize CSS', 'Create and manage site variables', 'Code quality and maintainability'],
      open: true
    },
    {
      heading: 'SQL',
      imgAlt: 'SQL Logo',
      imgSrc: 'assets/logos/sql.png',
      subHeading: 'Talking to databases',
      texts: ['TSQL', 'Microsoft SQL server', 'Postgres', 'MySQL'],
      open: true
    }
  ];

  return (
    <div ref={ref} style={{ opacity: 0 }} className="languages page">
      <h3>Coding Languages</h3>
      <hr />
      <Accordion data={accordionData}></Accordion>
    </div>
  );
}
