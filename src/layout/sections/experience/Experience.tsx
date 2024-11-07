import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';

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
        <FlexWrapper content="space-between">
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
  padding: 100px 0 140px 0;
  background-color: #161d2a;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
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
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );
    border-radius: 83px;
    position: absolute;
    left: 3%;
    bottom: -28px;
  }
`;

const Year = styled.p`
  font-weight: 600;
  font-size: 26px;
  color: #fff;
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
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #fff;
  max-width: 250px;
`;
