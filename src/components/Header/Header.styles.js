import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 20px 40px;
  background: ${(props) => props.theme.colors.headerBg};
  @media ${(props) => props.theme.media.phone} {
    padding: 10px 20px;
  }
`;
