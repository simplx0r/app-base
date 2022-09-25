import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { allFonts, reset } from 'shared';
import { Routing } from 'pages';
import { Header } from './header';

import { withRouter } from './providers';

export const Reset = createGlobalStyle`${reset} ${allFonts}`;
const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Header />
      <Routing />
    </ThemeProvider>
  );
}

export default withRouter(App);
