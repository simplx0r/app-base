import React from 'react';
import { Links } from 'shared/models';
import { container, link } from './header.module.scss';

interface Props {
  links: Links[];
}
export function Header({ links }: Props) {
  return (
    <header className={container}>
      {links.map(({ name, url }) => <a className={link} href={url}>{name}</a>)}
    </header>
  );
}
