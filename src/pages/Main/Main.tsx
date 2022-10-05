import React from 'react';
import styled from 'styled-components';
import { mixins } from 'shared';

const HeroContainer = styled.div`
width:100%;
${mixins.flex.centeredCol}
padding-top:40px;
${mixins.font('Poppins', 16, 16, '#faff')}`;
const Main = () => (
  <HeroContainer>Main</HeroContainer>
);
export { Main };
