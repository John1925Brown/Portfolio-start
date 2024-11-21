import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
import { FlexWrapper } from '../../../components/FlexWrapper';

const Main = styled.section`
  position: relative;
  padding-top: 175px;
  div > div {
    @media ${theme.media.tablet} {
      flex-direction: column;
      align-items: center;
    }
  }

  div > ${FlexWrapper} {
    div {
      @media ${theme.media.tablet} {
        display: flex;
        align-items: center;
        max-width: 380px;
      }
    }
  }
`;

const Title = styled.h1`
  ${font({ weight: 600, Fmax: 54, Fmin: 26 })}
  max-width: 670px;
  margin-bottom: 15px;
  padding-top: 40px;

  p {
    display: none;
  }
`;

const Description = styled.p`
  ${font({ color: '#bcbcbc', Fmax: 18, Fmin: 12 })}
  margin-bottom: 60px;
  max-width: 480px;
  @media ${theme.media.tablet} {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const S = {
  Description,
  Title,
  Main,
};
