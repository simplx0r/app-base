import React from 'react';
import scss from './header.module.scss';

const links = [{
  name: 'Яндекс',
  url: 'https://yandex.ru',
  imgSrc: '../assets/logo.jpeg',
}];

function Header() {
  return (
    <header className={scss.container}>
      {links.map(({ name, url }) => (
        <a href={url} className={scss.link}>
          {name}
          <img src="1" alt="" className={scss.logo} />
        </a>
      ))}

    </header>
  );
}
export { Header };
