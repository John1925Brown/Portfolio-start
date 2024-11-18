import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Projects = styled.section`
  position: relative;
  background: ${theme.colors.secondaryBg};

  ul:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px 60px;
  }

  @media screen and (max-width: 1000px) {
    ul:last-child {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }

  @media ${theme.media.mobile} {
    ul:last-child {
      gap: 20px;
    }
  }
`;

export const S = {
  Projects,
};
