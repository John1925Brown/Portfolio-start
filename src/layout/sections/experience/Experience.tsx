import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Experience_Styles';

export const Experience: React.FC = () => {
  return (
    <S.Experience>
      <Container>
        <SectionTitle title="Experience"></SectionTitle>
        <S.TimeLine>
          <S.Year>2017</S.Year>
          <S.Year>2019</S.Year>
          <S.Year>2021</S.Year>
          <S.Year>2023</S.Year>
        </S.TimeLine>
        <FlexWrapper content="space-between" gap="15px">
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor t ut labore et dolore magna aliqua.
          </S.Description>
          <S.Description>
            Lorem dolor sit amet, consectetur adipiscing elit, sed dempor
            incididunt ut labore et dolore magna adipiscin
          </S.Description>
          <S.Description>
            Lorem ipsum dolor met, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut et dolore magna aliqua.
          </S.Description>
          <S.Description>
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </S.Description>
        </FlexWrapper>
      </Container>
    </S.Experience>
  );
};
