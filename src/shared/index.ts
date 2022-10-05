import { useStore } from 'effector-react';
import { useMemo } from 'react';
import {
  css, FlattenSimpleInterpolation,
} from 'styled-components';
import { currentTheme } from 'app/store/events';
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
}].reduce((cssFonts, {
  family, weight, url, format,
}) => {
  // eslint-disable-next-line no-param-reassign
  cssFonts += `@font-face {
  font-family: "${family}";
  src: url("${url}") format("${format}");
  font-weight: ${weight};`;
  return cssFonts;
}, '');

const allFonts = css`${fonts}`;

const sizes = {
  mediaQuery: {
    sm: '540px',
    md: '768px',
    lg: '1025px',
    xxl: '1220px',
  },
  containerPadding: '20px',
};

const colors = { header: ['#fff', '#000'] };

const mixins = {
  flex: {
    centeredCol: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`,
    centeredRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
`,
    sb: css`display: flex;
    justify-content:space-between;`,
    column: css`display: flex;
  flex-direction: column;`,
  },
  p: {
    x: (pX: number) => css`padding-left: ${pX}px; padding-right: ${pX}px;`,
    y: (pY: number) => css`padding-top: ${pY}px; padding-bottom:${pY}px;`,
  },
  media: (size: keyof typeof sizes.mediaQuery | Array<keyof typeof sizes.mediaQuery>, content: FlattenSimpleInterpolation) => css`
${Array.isArray(size) ? size.reduce((acc, singleSize) => acc += `@media screen and (max-width: ${sizes.mediaQuery[singleSize]}) {
${content}
}`, '') : `@media screen and (max-width: ${sizes.mediaQuery[size]}) {
${content}
}`}

`,
  swap: (value: string[]) => {
    value.forEach((item, index) => {
      let l = item;
      let r = value[-index - 1];
      if (l && r) {
        const tmp = l;
        l = r;
        r = tmp;
      }
    });
    return value;
  },
  font: (family: string, size: number, lineHeight: number, color: string, spacing: string | number = 'normal', weight = 400) => css`
  font-family:${family};
  font-weight:${weight};
  font-size:${`${size}px`};
  letter-spacing: ${spacing || 'normal'};
  line-height: ${`${lineHeight}px`};
  color: ${color};
    `,
  grid: (cols: number, rows:number, width = '100%', height = '100%') => css`
display: grid;
width: ${width};
height:${height};
grid-template-columns:repeat(${cols}, 1fr);
grid-template-rows:repeat(${rows}, 1fr);
`,
  //   container: css`
  //   Object.keys(sizes.mediaQuery).reduce((acc, query)=>{
  // acc+=mixins.media(query as typeof keyof sizes.mediaQuery, css`max-width:${sizes.mediaQuery[query as typeof keyof sizes.mediaQuery]};`), ''})
  //   `

};

const background = (url: string) => css`
background: url(${url});
background-repeat: no-repeat;
`;
// const useTheme = () => {
//   const choosenTheme = useStore(currentTheme);
//   const colors = useMemo(() => Object.values(colorsObject).reduce((colorAcc, [element, color]) => {
//     // eslint-disable-next-line no-param-reassign
//     colorAcc[element as keyof typeof colorsObject] = choosenTheme === 'dark' ? color[1] : color[0];
//     return colorAcc;
//   }, {} as Record<keyof typeof colorsObject, string>), [choosenTheme]);
//   return colors;
// };

export {
  mixins, sizes, allFonts, background, colors,
};
