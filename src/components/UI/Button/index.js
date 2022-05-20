/* eslint-disable indent */
import styled from 'styled-components';
import { css } from 'styled-components';

const Button = styled.button`
  padding: 5px;
  border: 2px solid ${(props) => props.theme.colors.mainText};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.button};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  ${(props) =>
    props.post &&
    css`
      background-color: ${(props) =>
        props.active
          ? props.theme.colors.buttonAdd
          : props.theme.colors.buttonDelete};
    `};
  ${(props) =>
    props.up &&
    css`
      width: 50px;
      height: 50px;
      position: fixed;
      right: 50px;
      bottom: 50px;
      border-radius: 50%;
      @media ${(props) => props.theme.media.tablet} {
        right: 25px;
        bottom: 25px;
      }
      @media ${(props) => props.theme.media.phone} {
        right: 10px;
        bottom: 10px;
      }
    `};
  ${(props) =>
    props.close &&
    css`
      align-self: flex-end;
      position: sticky;
      top: 0px;
      right: 0px;
      background-color: ${(props) => props.theme.colors.buttonDelete};
    `};
`;

export default Button;
