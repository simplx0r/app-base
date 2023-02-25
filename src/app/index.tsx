import React from 'react';

import { createGlobalStyles } from 'goober/global';
import { allFonts, reset } from 'shared';
import { Routing } from 'pages';

import { withRouter } from './providers';
import { Header } from './header';

export const Reset = createGlobalStyles`${reset} ${allFonts}`;

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
