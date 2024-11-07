import React, { ReactElement } from 'react';
import './icon-list.component.scss';

export function IconList(): ReactElement {
  const icons: [alt: string, className: string, link: string][] = [
    ['StackOverflow', 'fa-brands fa-stack-overflow', 'https://stackoverflow.com/users/4448428/terrance00'],
    ['GitHub', 'fa-brands fa-github', 'https://github.com/terrance00']
  ];

  return (
    <div className="icon-list">
      {icons.map(([alt, className, link]: [a: string, b: string, c: string], i: number) => (
        <a className="icon-link" target="_blank" href={link} key={i}>
          <i className={className + ' fa-2xl'} title={alt}></i>
        </a>
      ))}
    </div>
  );
}
