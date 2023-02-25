import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'goober';
import { default as s } from 'tailwind-styled-components';
import { userStore } from 'app/store/userStore';
import logo from './logo.png';

const links = [{
  name: 'Яндекс',
  url: 'https://yandex.ru',
  imgSrc: '../assets/logo.jpeg',
}];

const Wrapper = s.div`
    pt-[30px]
    w-full
    flex
    px-[20px]
    bg-[#004242]
`;
const Container = s.div`
flex
w-full
`;

const Logo = styled('img')`
  max-width: 32px;
  max-height: 32px;
  border-radius: 16px;`;

const Links = styled('a')``;
function Header() {
  const { counter, inc, dec } = userStore;

  return (
    <Wrapper>
      <Container>
        <Logo src={logo} />
        {links.map(({ name, url, imgSrc }) => (
          <Links key={name}>
            {name}
          </Links>
        ))}
        <div>{counter}</div>
        <button onClick={inc} />
        <button onClick={dec} />
      </Container>
    </Wrapper>
  );
}
export { Header };
