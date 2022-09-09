import './icon-list.component.scss';
import { ReactElement } from 'react';
import React from 'react';

export function IconList(): ReactElement {
  const icons: [alt: string, filePath: string, link: string][] = [
    ['Linked In', 'assets/icons/linkedin.png', 'https://www.linkedin.com/in/terrance-jevon-3379b489/'],
    ['StackOverflow', 'assets/icons/stack-overflow.png', 'https://stackoverflow.com/users/4448428/terrance00'],
    ['GitHub', 'assets/icons/github.png', 'https://github.com/terrance00']
  ];

  return (
    <div className="icon-list">
      {icons.map(([alt, path, link]: [a: string, b: string, c: string]) => (
        <a href={link}>
          <img alt={alt} src={path} />
        </a>
      ))}
    </div>
  );
}
