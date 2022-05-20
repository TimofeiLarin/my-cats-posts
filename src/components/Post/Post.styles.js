import styled from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.postBg};
`;

export const PostTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;
