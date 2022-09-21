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
      subHeading: 'Microsoft\'s flagship coding language',
      texts: [
        'Many experiences.', 'Good ones.'
      ],
      open: true
    }
  ];

  return (
    <div ref={ref} style={{ opacity: 0 }} className="languages page">
      <h3>
        Coding Languages
      </h3>
      <hr />
      <Accordion data={accordionData}></Accordion>
    </div>
  );
}
