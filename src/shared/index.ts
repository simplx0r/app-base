
import { useMemo } from 'react';
import {
  css,
} from 'goober'

import PoppinsTtf from '../app/fonts/poppins.ttf';
import PoppinsWoff2 from '../app/fonts/poppins.woff2';
import PoppinsWoff from '../app/fonts/poppins.woff';

export const reset = css`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
const fonts = [{
  family: 'Poppins',
  weight: 400,
  url: PoppinsWoff2,
  format: 'woff2',
}].reduce((acc, {
  family, weight, url, format,
}) => {
  acc += `@font-face {
  font-family: ${family};
  src: url(${url}) format(${format});
  font-weight:${weight};`;
  return acc;
}, '');

const allFonts = css`${fonts}`;

const insertFont = (family: string, weight: number, size: number, lineHeight: number, spacing?: number) => css`
  font-family:${family};
  font-weight:${weight};
  font-size:${size};
  letter-spacing: ${spacing || 'normal'};
  line-height: ${lineHeight};
    `;
const sizes = {
  mediaQuery: {
    sm: '540px',
    md: '768px',
  },
  containerPadding: '20px',
};
const media = (size: keyof typeof sizes.mediaQuery, content: string) => css`
@media screen and (max-width: ${sizes.mediaQuery[size]}) {
${content}
}

`;
const colorsObject = { header: ['#fff', '#000'] };

const swap = (value: string[]) => value.forEach((item) => {
  if (value.length !== 2) return;
  let l = item;
  let r = value.at(-1);
  if (l && r) {
    const tmp = l;
    l = r;
    r = tmp;
  }
});


export {
  swap, media, insertFont,  sizes, allFonts,
};
