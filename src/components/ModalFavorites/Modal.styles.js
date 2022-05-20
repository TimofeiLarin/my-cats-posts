import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: alias;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 90%;
  border: 2px solid $border;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  overflow: scroll;
  cursor: auto;
  overflow-x: hidden;
  @media ${(props) => props.theme.media.tablet} {
    width: 90%;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 90%;
  }
`;
