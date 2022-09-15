import React from 'react';
import s from './header.module.scss';

const links = [{
  name: 'Яндекс',
  url: 'https://yandex.ru',
  imgSrc: '../assets/logo.jpeg',
}];

function Header() {
  return (
    <header className={s.container}>
      {links.map(({ name, url }) => (
        <a href={url} className={s.link}>
          {name}
          <img src="1" alt="" className={s.logo} />
        </a>
      ))}

    </header>
  );
}
export { Header };
