import styled from 'styled-components';
import photoUrl from '../../assets/images/Hero.webp';
import { StyledLinkBtn } from '../../components/linkBtn/LinkBtn';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper content="space-around">
        <div>
          <Title>Yarasheuski Dzmitry Frontend developer</Title>
          <Description>
            Frontend developer focused on creating modern, interactive web
            interfaces with clean code. Passionate about UX/UI and dedicated to
            efficient, scalable solutions.
          </Description>
          <StyledLinkBtn width="240px"> Let’s Begin</StyledLinkBtn>
        </div>
        <Photo src={photoUrl} alt="Hero" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  width: 80%;
  padding: 125px 0 125px 0;
  margin: 0 auto;
`;

const Photo = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 50px 0;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 54px;
  color: #fff;
  max-width: 670px;
  margin-bottom: 15px;
  padding-top: 75px;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #bcbcbc;
  margin-bottom: 60px;
  max-width: 480px;
`;
