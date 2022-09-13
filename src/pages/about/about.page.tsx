import React, { MutableRefObject, useRef } from 'react';
import { ReactElement } from 'react';
import { FadeIn } from '../../helpers/fade-in.helper';
import './about.page.scss';

export function About(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(ref);

  const techLogos: { alt: string; src: string }[] = [
    { alt: 'Angular', src: 'assets/logos/angular.png' },
    { alt: 'C-Sharp', src: 'assets/logos/c-sharp.png' },
    { alt: 'Docker', src: 'assets/logos/docker.png' },
    { alt: 'Javascript', src: 'assets/logos/javascript.png' },
    { alt: 'Kubernetes', src: 'assets/logos/kubernetes.png' },
    { alt: 'MongoDB', src: 'assets/logos/mongo-db.png' },
    { alt: 'MS SQL Server', src: 'assets/logos/ms-sql-server.png' },
    { alt: '.Net', src: 'assets/logos/dot-net.png' },
    { alt: 'RabbitMQ', src: 'assets/logos/rabbit-mq.png' },
    { alt: 'React', src: 'assets/logos/react.png' },
    { alt: 'Redis', src: 'assets/logos/redis.png' },
    { alt: 'Typescript', src: 'assets/logos/typescript.png' }
  ];

  return (
    <div ref={ref} style={{ opacity: 0 }} className="about page">
      <p>
        Father, husband and <strong>Software Engineer.</strong>
      </p>
      <p>I love all of the above jobs and I strive to do them to the best of my capability.</p>
      <p>
        I started as a <strong>professional developer</strong> in 2013, and I haven't looked back since. I completed a Bachelors of Science
        degree, part-time, majoring in <strong>computer science</strong> and <strong>applied mathematics</strong> and graduated in 2018.
      </p>
      <p>
        My journey through software development has been focussed on <strong>Web Development</strong> and more recently{' '}
        <strong>micro-services</strong>, but I have touched on many other aspects such as desktop applications and mobile apps.
      </p>
      <p>
        I have led a number of teams both in the <strong>front-end</strong> and the <strong>back-end</strong>. I have also been involved in
        the design and planning for multiple projects - starting from scratch.
      </p>
      <p>
        Through my experience in different companies I am fully able to <strong>architect scalable</strong> and{' '}
        <strong>easily deployable mircoservices</strong> systems.
      </p>
      <p>
        <em>Please scroll through some of the technologies I have enjoyed using:</em>
      </p>
      <div className='img-container'>
        {techLogos.map((item: { alt: string; src: string }, i: number) => (
          <img alt={item.alt} src={item.src} key={i} />
        ))}
      </div>
    </div>
  );
}
