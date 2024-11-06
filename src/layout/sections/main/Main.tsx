import styled from 'styled-components';
import photoUrl from '../../../assets/images/Hero.webp';
import { StyledLinkBtn } from '../../../components/linkBtn/LinkBtn';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Photo } from '../../../components/Photo';

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
        <Photo
          src={photoUrl}
          width="380px"
          height="450px"
          radius="50px 0"
          alt="Hero"
        />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 125px;
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
