import React from 'react';
import s from './header.module.scss';

const links = [{
  name: 'Яндекс',
  url: 'https://yandex.ru',
  imgSrc: '../assets/logo.jpeg',
}];

function Header() {
  return (
    <>
      <header className="header">
        {links.map(({ name, url }) => (
          <a href={url} className="header__link">
            {name}
            <img src="1" alt="" className="header__logo" />
          </a>
        ))}

      </header>
      <header className="mobileHeader">
        {links.map(({ name, url }) => (
          <a href={url} className="header__link">
            {name}
            <img src="1" alt="" className="header__link" />
          </a>
        ))}

      </header>
    </>
  );
}
export { Header };
