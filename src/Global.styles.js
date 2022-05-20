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
  @media ${(props) => props.theme.media.tablet} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 2.5rem;
  }
}
h2 {
  font-size: 2.5rem;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1.8rem;
  }
}
p {
  font-size: 2rem;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 1.8rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1.6rem;
  }
}
button {
  font-size: 2rem;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 1.8rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1.6rem;
  }
}
`;

export const theme = {
  colors: {
    mainText: '#000000',
    headerBg: 'linear-gradient(183deg, #67C3F3, #5A98F2 83%)',
    postBg: 'rgba(90,152,242, 0.4)',
    border: '#5A98F2',
    button: '#5A98F2',
    buttonAdd: '#A7FE4D',
    buttonDelete: '#FE6464',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
    medium: '(max-width: 992px) and (min-width: 768px)',
  },
};
