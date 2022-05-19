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
  width: 50%;
  margin-top: 100px;
  border: 2px solid $border;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  cursor: auto;
`;
