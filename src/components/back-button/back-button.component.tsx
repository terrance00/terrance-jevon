import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './back-button.component.scss';

export function BackButton(): ReactElement {
  return <Link className="back-button" to="/"><i className="fa-solid fa-arrow-left"></i></Link>;
}
