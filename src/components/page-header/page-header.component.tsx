import React from 'react';
import { ReactElement } from 'react';
import './page-header.component.scss';
import { IconList } from '../icon-list/icon-list.component';

export function PageHeader(props: { currentWidth: number }): ReactElement {
  return (
    <div className="page-header">
      <img alt="profile-pic" className="profile-pic" src="assets/adff9f9d19f8523eaa31c4bfd513913f.jpg" />
      <h4><span className="thin">Allan Terrance Jevon</span> | Software Engineer</h4>
      <hr/>
      <IconList />
    </div>
  );
}
