import React, { MutableRefObject, useRef } from 'react';
import { ReactElement } from 'react';
import { FadeIn } from '../../helpers/fade-in.helper';
import './databases.page.scss';

export function Databases(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(ref);

  return <div ref={ref} style={{ opacity: 0}} className="databases page"></div>;
}
