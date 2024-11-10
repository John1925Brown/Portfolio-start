import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

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
    width: 94%;
    height: 8px;
    background: ${theme.colors.gradientBg};
    border-radius: 83px;
    position: absolute;
    left: 3%;
    bottom: -28px;
  }
`;

const Year = styled.p`
  font-weight: 600;
  font-size: 26px;
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
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 250px;
`;
