import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% {
  transform: rotateZ(0deg);
}
100% {
  transform: rotateZ(360deg);
}
`;

const Loading = styled.h2`
  width: 120px;
  height: 120px;
  margin-bottom: 50px;
  color: green;
  border: 4px dashed green;
  border-radius: 50%;
  animation: ${rotateAnimation} 1s infinite linear;
`;

export default Loading;
