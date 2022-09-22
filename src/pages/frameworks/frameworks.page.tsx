import React, { MutableRefObject, useRef } from 'react';
import { ReactElement } from 'react';
import { FadeIn } from '../../helpers/fade-in.helper';
import './frameworks.page.scss';

export function Frameworks(): ReactElement {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  FadeIn(ref);

  return (
    <div ref={ref} style={{ opacity: 0 }} className="frameworks page">
      <h3>Angular</h3>
      <hr />
      <p>
        I have <strong>led 3 teams</strong> in Angular projects. These projects were heavy with front-end functionality such as GIS,
        Mapping, Animation and data visualization.
        <br />
        <strong>Angular</strong> is framework I have been fond of and using since 2016. It delivers fantastic features out of the box, and
        coupled with <strong>Typescript</strong>, it really helps a team keep their front end code organized and clean.
        <br />
      </p>
      <h3>React</h3>
      <hr />
      <p>
        <strong>React</strong> is a framework that I have been using for about a year. It comes with the staggering ability to deliver code
        fast.
        <br />
        When you couple react with Typescript, you can even mimick a lot of the benefits you get from a framework like Angular.
        <br />
        React uses a functional coding paradigm and really opens some interesting doors in terms of state management.
      </p>
      <h3>.Net Core</h3>
      <hr />
      <p>
        I have been using .net core since the <strong>v1-rc</strong> version was released back in 2014. It has opened me up to the world of
        linux and the fact that it runs on any OS is incredible.
        <br />I have used .net core for developing <strong>WebApi</strong>, <strong>MVC</strong>, <strong>SPA</strong> and even desktop
        projects.
        <br />
        Microsoft keeps adding features to C# and dotnet core at a rapid pace and I forsee that I will keep being an avid supporter and user
        of .net core.
      </p>
      <h3>.Net Framework</h3>
      <hr />
      <p>
        The very first framework that I used to write code - .Net framework has a special place in my heart.
        <br />
        While I don't actively start any projects with this legacy software, I still end up maintaining projects - and perceive it as a
        familiar old friend.
        <br />
        With .Net framework, I have used the following technologies: <strong>WebForms</strong>, <strong>WinForms</strong>,{' '}
        <strong>MVC</strong> and <strong>WebAPI</strong>.
      </p>
      <h3>NodeJS</h3>
      <hr />
      <p>
        The freedom and speed of using a scripting language still amazes me. I have used <strong>nodejs</strong> for plenty of smaller
        projects.
        <br />I enjoy having to create my own processes to compile and run nodejs, and often, I try to incorporate{' '}
        <strong>Typescript</strong>.
        <br />
        Coupled with libraries like <strong>express</strong>, nodejs becomes a powerful tool for building modular and extensible APIs.
      </p>
      <h3>Containerization (Docker)</h3>
      <hr />
      <p>
        Docker is a technology that has amazed me from the start.
        <br />
        Easily containerizing your applications and keeping your environments agnostic has not only helped me with professional use cases -
        it has also teached me to become a better programmer.
        <br />
        With (almost) all of the frameworks mentioned above I have been involved in creating <strong>images</strong>, and have paid special
        attention to branching strategies and <strong>versioning</strong>.
        <br/>
        Docker has also led me into the world of <strong>Kubernetes</strong> and has made developing microservices a great joy.
      </p>
    </div>
  );
}
