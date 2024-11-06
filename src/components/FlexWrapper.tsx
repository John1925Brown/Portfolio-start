import styled from 'styled-components';

type TypeFlexWrapper = {
  direction?: string;
  content?: string;
  align?: string;
  wrap?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<TypeFlexWrapper>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.content || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'no-wrap'};
  gap: ${(props) => props.gap || 0};
`;
