import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

const Projects = styled.section`
  background: ${theme.colors.secondaryBg};

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      gap: 20px;
    }
  }
`;

export const S = {
  Projects,
};
