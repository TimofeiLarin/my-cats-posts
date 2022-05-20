import styled from 'styled-components';

const Img = styled.img`
  height: 400px;
  @media ${(props) => props.theme.media.medium} {
    height: 340px;
  }
  @media ${(props) => props.theme.media.tablet} {
    height: 200px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 150px;
  }
`;

export default Img;
