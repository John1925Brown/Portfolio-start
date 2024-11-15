import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
import { FlexWrapper } from '../../../components/FlexWrapper';

const Experience = styled.section`
  position: relative;
  background-color: ${theme.colors.secondaryBg};

  div > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
`;

const TimeLine = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 80px;
  position: relative;

  &::after {
    content: '';
    width: 92%;
    height: 8px;
    background: ${theme.colors.gradientBg};
    border-radius: 83px;
    position: absolute;
    left: 3%;
    bottom: -27px;

    @media ${theme.media.tablet} {
      width: 90%;
      height: 6px;
      left: 5%;
      bottom: -25px;
    }

    @media ${theme.media.mobile} {
      width: 88%;
      height: 4px;
      bottom: -27px;
    }
  }
`;

const Year = styled.p`
  ${font({ weight: 600, Fmax: 26, Fmin: 16 })}
  position: relative;

  &::after {
    content: '';
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -35px;
    z-index: 100;

    @media ${theme.media.mobile} {
      width: 20px;
      height: 20px;
    }
  }
`;

const Description = styled.p`
  ${font({ Fmax: 18, Fmin: 14 })}
  text-align: center;
  max-width: 250px;

  /* При нажатии на белый кружок, будет расскрываться опеределенный элемент Description */

  @media ${theme.media.tablet} {
    display: none;
    &:first-of-type {
      display: block;
      max-width: 200px;
    }
  }
`;
export const S = {
  Description,
  Year,
  TimeLine,
  Experience,
};
