import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';

const links = [{
  name: 'Яндекс',
  url: 'https://yandex.ru',
  imgSrc: '../assets/logo.jpeg',
}];

const HeaderWrapper = styled.div`
padding-top: 30px;
width: 100%;
display: flex;
padding-right: 20px;
padding-left: 20px;
background: #fff;
`;
const HeaderContainer = styled.div`
width: 100%;
padding-left: 20px;
padding-right: 20px;
display: flex;
justify-content:space-between;
align-items:center;
align-content: center;`;
const Logo = styled.img`
max-width: 32px;
max-height: 32px;
border-radius: 16px;`;
const HeaderLink = styled(Link)`
font-size: 16px;
font-weight: 400;
text-decoration: none;
font-family: Roboto;
transition: 0.4s ease-in;
&:hover {
 color: #faff;
}

`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src={logo} />
        {links.map(({ name, url, imgSrc }) => (
          <HeaderLink to={url}>
            {name}
          </HeaderLink>
        ))}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
export { Header };
