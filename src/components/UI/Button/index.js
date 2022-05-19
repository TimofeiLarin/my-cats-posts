import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.active ? 'green' : 'gray')};
`;

export default Button;
