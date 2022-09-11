import './menu.page.scss';
import { ReactElement } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export function Menu(): ReactElement {
  return <div className="menu-page">
    <Link to="/js">JS</Link>
  </div>;
}
