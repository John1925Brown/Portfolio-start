import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

const Project = styled.article`
  border: 1px solid #a39d9d;
  border-radius: 50px 0;
  max-width: 550px;
  flex: 1 1 40%;
  background: ${theme.colors.primaryBg};
  padding: 25px 25px 40px 25px;

  display: flex;

  div {
    flex-direction: column;
  }

  div > button {
    margin-top: auto;
  }

  @media ${theme.media.tablet} {
    flex: none;
    width: 100%;
  }

  @media ${theme.media.mobile} {
    padding: 20px;
  }
`;

const Title = styled.h3`
  ${font({ weight: 600, Fmin: 20, Fmax: 30 })}
  line-height: 0.885;
  margin-bottom: 65px;
  position: relative;
  align-self: center;

  &::after {
    content: '';
    position: absolute;
    border-radius: 83px;
    width: 200%;
    height: 4px;
    bottom: -23px;
    left: 0;
    transform: translateX(-25%);
    background: ${theme.colors.gradientBg};

    @media screen and (max-width: 930px) {
      width: 160%;
      transform: translateX(-20%);
    }
  }

  @media ${theme.media.mobile} {
    margin-bottom: 45px;
  }
`;

const Description = styled.p`
  ${font({ Fmin: 14, Fmax: 18, color: theme.colors.font })}
  margin-bottom: 50px;

  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`;

export const S = {
  Description,
  Title,
  Project,
};
