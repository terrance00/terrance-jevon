import React, { SyntheticEvent, useState } from 'react';
import { ReactElement } from 'react';
import { AccordionData } from './accordion-data.interface';
import './accordion.component.scss';

export function Accordion(props: { data: AccordionData[] }): ReactElement {
  const [openIndices, setOpenIndices]: [a: number[], b: (c: number[]) => void] = useState<number[]>([]);

  const onAccordionClick: (e: number) => void = (indexToToggle: number) => {};

  return (
    <div className="accordion">
      {props.data.map((acc: AccordionData, i: number) => (
        <div key={i} className={`accordion-item ${openIndices.findIndex(oi => oi === i) > -1 ? 'open' : 'closed'}`}>
          <p onClick={() => onAccordionClick(i)} className="accordion-heading">
            <img src={acc.imgSrc} alt={acc.imgAlt} />
            <strong>{acc.heading}</strong>
            <small>{acc.subHeading}</small>
          </p>
          <div className="accordion-text">
            {acc.texts.map((text: string, j: number) => (
              <p key={j}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
