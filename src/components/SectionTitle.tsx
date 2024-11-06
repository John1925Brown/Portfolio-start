import styled from 'styled-components';

type TypeSectionTitle = {
  title: string;
};

export const SectionTitle = (props: TypeSectionTitle) => {
  return <StyledSectionTitle>{props.title}</StyledSectionTitle>;
};

const StyledSectionTitle = styled.h2`
  font-weight: 600;
  font-size: 46px;
  color: #fff;
  margin-bottom: 70px;
  padding-top: 100px;
`;
