import styled from 'styled-components';

const Video = styled.video`
  height: 400px;
  @media ${(props) => props.theme.media.medium} {
    height: 340px;
  }
  @media ${(props) => props.theme.media.tablet} {
    height: 250px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 150px;
  }
`;

export default Video;
