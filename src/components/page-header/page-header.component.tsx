import React from 'react';
import { ReactElement } from 'react';
import './page-header.component.scss';
import { IconList } from '../icon-list/icon-list.component';

export function PageHeader(props: { currentWidth: number }): ReactElement {
  return (
    <div className="page-header">
      <img alt="profile-pic" src="assets/adff9f9d19f8523eaa31c4bfd513913f.jpg" />
      <h4>Allan Terrance Jevon</h4>
      <hr/>
      <h4 className="description">Software Engineer</h4>
      <hr/>
      <IconList />
    </div>
  );
}
