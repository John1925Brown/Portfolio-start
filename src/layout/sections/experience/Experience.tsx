import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Experience = () => {
  return (
    <StyledExperience>
      <Container>
        <SectionTitle title="Experience"></SectionTitle>
        <TimeLine>
          <Year>2017</Year>
          <Year>2019</Year>
          <Year>2021</Year>
          <Year>2023</Year>
        </TimeLine>
        <FlexWrapper content="space-between" gap="15px">
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor t ut labore et dolore magna aliqua.
          </Description>
          <Description>
            Lorem dolor sit amet, consectetur adipiscing elit, sed dempor
            incididunt ut labore et dolore magna adipiscin
          </Description>
          <Description>
            Lorem ipsum dolor met, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut et dolore magna aliqua.
          </Description>
          <Description>
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Description>
        </FlexWrapper>
      </Container>
    </StyledExperience>
  );
};

const StyledExperience = styled.section`
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
