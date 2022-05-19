import { createGlobalStyle } from 'styled-components';

import MyFont from './assets/fonts/YuseiMagic-Regular.ttf';

export const Global = createGlobalStyle`
@font-face {
  font-family: 'Yusei Magic';
  src: url(${MyFont}) format('truetype');
  font-style: normal;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family:'Yusei Magic', Arial, Georgia, sans-serif;
    color: #000000;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: 10px;
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}
p {
  font-size: 2rem;
}
`;

export const theme = {
  colors: {
    mainText: '#000000',
    otherText: 'rgba(0, 0, 0, 0.35)',
    lightText: '#FFFFFF',
    headerBg: 'linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);',
    border: '#5A98F2',
    buttonAdd: '#A7FE4D',
    buttonDelete: '#FE6464',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
    medium: '(max-width: 992px) and (min-width: 768px)',
    large: '(max-width: 1200px) and (min-width: 992px)',
  },
};