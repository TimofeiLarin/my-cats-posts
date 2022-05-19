import styled from 'styled-components';

type FlexProps = {
  fDirection?: string;
  alignItems?: string;
  jContent?: string;
  wrap?: boolean;
  height?: string;
  marginTop?: number;
  marginBottom?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.fDirection || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.jContent || 'flex-start'};
  flex-wrap: ${(props) => props.wrap && 'wrap'}; ;
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export default Flex;
