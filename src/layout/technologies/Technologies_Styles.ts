import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

const ProgressContainer = styled.ul`
  width: 100%;
  margin-bottom: 120px;

  & progress {
    margin: 0 auto;
    width: calc(100vw * 0.625);
    height: 15px;
    -webkit-appearance: none;
    appearance: none;

    &::-webkit-progress-bar {
      background-color: #162950;
      border-radius: 83px;
    }

    &::-webkit-progress-value {
      background: ${theme.colors.gradientBg};
      border-radius: 83px;
    }
    &::-moz-progress-bar {
      background: ${theme.colors.gradientBg};
      border-radius: 83px;
    }
  }

  @media ${theme.media.tablet} {
    margin-bottom: 100px;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 60px;
  }
`;

const ProgressText = styled.p`
  ${font({ weight: 600, Fmax: 24, Fmin: 18 })};
  margin-left: 25px;
`;

const AddTitleTechs = styled.h3`
  ${font({ weight: 600, Fmax: 44, Fmin: 25, color: theme.colors.font })}
  display: flex;
  justify-content: center;
  margin-bottom: 70px;

  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`;

export const S = {
  ProgressContainer,
  AddTitleTechs,
  ProgressText,
};
