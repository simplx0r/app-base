import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { flex, media, sizes } from 'shared';
import logo from './logo.png';

const MobileHeaderContainer = styled.div`
position: sticky;
display:none;
width:100%;
background:#424242;
  padding-right: ${sizes.containerPadding};
  padding-left: ${sizes.containerPadding};
${media(['sm', 'md'], css`${flex.sb}`)}
`;

const Burger = styled.span<{clicked: boolean}>`
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : 'black')};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;
const Logo = styled.img`
  max-width: 32px;
  max-height: 32px;
  border-radius: 16px;`;
interface Link {
  url: string;
  name: string;
}
interface MobileHeaderProps {
  links: Link[];
}
function MobileHeader({ links }:MobileHeaderProps) {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const toggleBurgerHandler = () => setIsBurgerOpened((prev) => !prev);
  return (
    <MobileHeaderContainer>
      <Logo src={logo} />
      <Burger clicked={isBurgerOpened} onClick={toggleBurgerHandler} />

    </MobileHeaderContainer>
  );
}
export { MobileHeader };
