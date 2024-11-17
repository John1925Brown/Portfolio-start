import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import React from 'react';
import { S } from './Technologies_Styles';
import { Carousel } from './Slider/Slider';
import '../../styles/slider.css';
import { Fade } from 'react-awesome-reveal';

type TypeSkill = {
  valueTitle: string;
  value: string;
};

export const Technologies: React.FC<{ skills: Array<TypeSkill> }> = ({
  skills,
}) => {
  return (
    <S.Technologies id={'technologies'}>
      <Container>
        <SectionTitle title="Technologies" />

        <S.ProgressContainer>
          <FlexWrapper direction="column" align="center" gap="25px">
            {skills.map((skill, index) => {
              return (
                <Fade cascade={true} damping={0.5}>
                  <li key={index}>
                    <S.ProgressText>{skill.valueTitle}</S.ProgressText>
                    <progress max="100" value={skill.value}></progress>
                  </li>
                </Fade>
              );
            })}
          </FlexWrapper>
        </S.ProgressContainer>

        <S.AddTitleTechs>Additional technologies and skills</S.AddTitleTechs>
        <FlexWrapper content="center" align="center">
          <Carousel />
        </FlexWrapper>
      </Container>
    </S.Technologies>
  );
};
