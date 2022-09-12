import React, { MutableRefObject, ReactElement, useRef } from 'react';
import { FadeIn } from '../../helpers/fade-in.helper';
import { IconList } from '../icon-list/icon-list.component';
import './page-header.component.scss';

export function PageHeader(props: { small: boolean }): ReactElement {
  const pageRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(pageRef);

  return (
    <div ref={pageRef} style={{ opacity: 0 }} className={!!props.small ? 'page-header-small' : 'page-header'}>
      <img alt="profile-pic" className="profile-pic" src="assets/adff9f9d19f8523eaa31c4bfd513913f.jpg" />
      <h4>
        <span className="thin">Allan Terrance Jevon</span> <br className='break' /> <span className="pipe">|</span> Software Engineer
      </h4>
      <hr />
      <IconList />
    </div>
  );
}
