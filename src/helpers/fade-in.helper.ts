import anime from 'animejs';
import { MutableRefObject, useEffect } from 'react';

export function FadeIn(component: MutableRefObject<HTMLElement | null>): void {
  useEffect(() => {
    if (!!component.current)
      anime({
        targets: [component.current],
        opacity: 1,
        duration: 2000,
        easing: 'easeOutQuad'
      });
  });
}
