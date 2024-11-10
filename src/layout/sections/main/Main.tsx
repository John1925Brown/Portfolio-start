import styled from 'styled-components';
import photoUrl from '../../../assets/images/Hero.webp';
import { StyledLinkBtn } from '../../../components/linkBtn/LinkBtn';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Photo } from '../../../components/Photo';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper content="space-between" gap="20px">
          <div>
            <Title>
              Yarasheuski Dzmitry <br />
              Frontend developer
            </Title>
            <Description>
              Frontend developer focused on creating modern, interactive web
              interfaces with clean code
            </Description>
            <StyledLinkBtn width="240px"> Let’s Begin</StyledLinkBtn>
          </div>
          <Photo
            src={photoUrl}
            width="380px"
            height="450px"
            heightTablet="350px"
            heightMobile="320px"
            widthMobile="320px"
            radius="50px 0"
            alt="Hero"
          />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
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
