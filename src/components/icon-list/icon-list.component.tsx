import './icon-list.component.scss';
import { ReactElement } from 'react';
import React from 'react';

export function IconList(): ReactElement {
  const icons: [alt: string, className: string, link: string][] = [
    ['Linked In', 'fa-brands fa-linkedin', 'https://www.linkedin.com/in/terrance-jevon-3379b489/'],
    ['StackOverflow', 'fa-brands fa-stack-overflow', 'https://stackoverflow.com/users/4448428/terrance00'],
    ['GitHub', 'fa-brands fa-github', 'https://github.com/terrance00']
  ];

  return (
    <div className="icon-list">
      {icons.map(([alt, className, link]: [a: string, b: string, c: string]) => (
        <a className="icon-link" href={link}>
          <i className={className + ' fa-2xl'} title={alt}></i>
        </a>
      ))}
    </div>
  );
}
