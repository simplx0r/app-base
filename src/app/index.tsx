import React from 'react';

import { css, createGlobalStyle } from 'styled-components';
import { allFonts, reset } from 'shared';
import { Routing } from 'pages';
import { Header } from './header';

import { withRouter } from './providers';

export const Reset = createGlobalStyle`${reset} ${allFonts}`;

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routing />
    </>
  );
}

export default withRouter(App);
