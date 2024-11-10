import styled from 'styled-components';
import { font } from '../styles/Common';
import { theme } from '../styles/Theme';

type TypeSectionTitle = {
  title: string;
};

export const SectionTitle = (props: TypeSectionTitle) => {
  return <StyledSectionTitle>{props.title}</StyledSectionTitle>;
};

const StyledSectionTitle = styled.h2`
  ${font({ weight: 600, Fmax: 46, Fmin: 25, color: theme.colors.font })}
  margin-bottom: 70px;
  padding-top: 100px;

  @media ${theme.media.tablet} {
    margin-bottom: 50px;
    padding-top: 50px;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 30px;
    padding-top: 40px;
  }
`;
