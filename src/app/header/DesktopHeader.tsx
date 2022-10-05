import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  mixins, sizes,
} from 'shared';
import logo from './logo.png';

const HeaderWrapper = styled.header`
${mixins.media(['sm', 'md'], css`display: none;`)}
  position: sticky;
  width: 100%;
  justify-items:center;
  align-items:center;
  height: 70px;
  padding-left: 20px;
  background: #46716e;
  max-width:${sizes.mediaQuery.xxl};
  ${mixins.flex.sb}
`;

const Logo = styled.img`
  max-width: 32px;
  max-height: 32px;
  border-radius: 16px;`;
const HeaderLink = styled(Link)`
  color: #fff;
 ${mixins.font('Poppins', 16, 16, '#000')}
  transition: 0.4s ease-in;
  text-decoration: unset;
  
&:hover {
 color: #faff;
}
`;


interface Link {
    url: string;
    name: string;
}
interface DesktopHeaderProps {
    links: Link[]
}
function DesktopHeader({ links }: DesktopHeaderProps) {
  return (

    <HeaderWrapper>
      <HeaderContainer>
        <Logo src={logo} />
        {links.map(({ url, name }) => <HeaderLink to={url}>{name}</HeaderLink>)}
      </HeaderContainer>
    </HeaderWrapper>

  );
}
export { DesktopHeader };
