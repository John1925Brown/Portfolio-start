import photoUrl from '../../../assets/images/Hero.webp';
import { StyledLinkBtn } from '../../../components/linkBtn/LinkBtn';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Photo } from '../../../components/Photo';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Main.Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper content="space-between" gap="20px">
          <div>
            <S.Title>
              <p> Frontend developer</p>
              <span>Yarasheuski Dzmitry </span>
              <br />
              <Typewriter
                options={{
                  strings: ['Frontend developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.Title>

            <S.Description>
              Frontend developer focused on creating modern, interactive web
              interfaces with clean code
            </S.Description>
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
    </S.Main>
  );
};
