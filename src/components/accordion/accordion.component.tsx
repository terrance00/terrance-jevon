import React, { ReactElement, useState } from 'react';
import { AccordionData } from './accordion-data.interface';
import './accordion.component.scss';

export function Accordion(props: { data: AccordionData[] }): ReactElement {
  const [openIndices, setOpenIndices]: [a: number[], b: (c: number[]) => void] = useState<number[]>([]);

  const onAccordionClick: (e: number) => void = (indexToToggle: number) => {
    const index: number = openIndices.findIndex((i) => i === indexToToggle);
    if (index > -1) openIndices.splice(index);
    else openIndices.push(indexToToggle);
    setOpenIndices([...openIndices]);
  };

  const openIndiciesMap: boolean[] = Array(props.data.length).fill(false);

  openIndices.forEach((index: number) => {
    openIndiciesMap[index] = true;
  });

  return (
    <div className="accordion">
      {openIndiciesMap.map((open: boolean, i: number) => (
        <div key={i} className={!!open ? 'accordion-item open' : 'accordion-item closed'}>
          <p onClick={() => onAccordionClick(i)} className="accordion-heading">
            <img src={props.data[i].imgSrc} alt={props.data[i].imgAlt} />
            <strong>{props.data[i].heading}</strong>
            <small>{props.data[i].subHeading}</small>
            <i className="fa-solid fa-caret-down"></i>
            <i className="fa-solid fa-caret-left"></i>
          </p>
          <ul className="accordion-text">
            {props.data[i].texts.map((text: string, j: number) => (
              <li key={j + 200}>{text}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}
