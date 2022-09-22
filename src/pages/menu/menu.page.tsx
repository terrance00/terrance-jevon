import './menu.page.scss';
import { ReactElement, MutableRefObject, useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

export function Menu(): ReactElement {
  const menuItems: { link: string; to: string }[] = [
    { link: 'About', to: 'about' },
    { link: 'Languages', to: 'languages' },
    { link: 'Frameworks', to: 'frameworks' },
    { link: 'Databases', to: 'databases' },
    //{ link: 'Microservices', to: 'microservices' },
    { link: 'Experience', to: 'experience' }
  ];

  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const anchors: HTMLElement[] = [...ref.current.querySelectorAll('a')];

    let offset: number = 0;

    anchors.forEach((a: HTMLElement) => {
      window.setTimeout(
        () =>
          anime({
            targets: a,
            opacity: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
            translateX: 20
          }),
        offset
      );
      offset += 100;
    });
  });

  return (
    <div ref={ref} className="menu page">
      {menuItems.map((item: { link: string; to: string }, i: number) => (
        <Link style={{ translate: '-20px 0', opacity: 0 }} to={`/${item.to}`} key={i}>
          {item.link}
        </Link>
      ))}
    </div>
  );
}
