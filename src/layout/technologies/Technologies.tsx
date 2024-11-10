import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { Container } from '../../components/Container';
import React from 'react';
import { S } from './Technologies_Styles';

type TypeSkill = {
  valueTitle: string;
  value: string;
};

const techsSvgsGroup = [
  {
    width: 100,
    height: 100,
    iconId: 'codeNpm',
  },
  {
    width: 100,
    height: 100,
    iconId: 'codeGitHubColor',
  },
  {
    width: 100,
    height: 100,
    iconId: 'codeFigma',
  },
];

export const Technologies: React.FC<{ skills: Array<TypeSkill> }> = ({skills}) => {
  return (
    <section>
      <Container>
        <SectionTitle title="Technologies" />

        <S.ProgressContainer>
          <FlexWrapper direction="column" align="center" gap="25px">
            {skills.map((skill, index) => {
              return (
                <li key={index}>
                  <S.ProgressText>{skill.valueTitle}</S.ProgressText>
                  <progress max="100" value={skill.value}></progress>
                </li>
              );
            })}
          </FlexWrapper>
        </S.ProgressContainer>

        <S.AddTitleTechs>Additional technologies and skills</S.AddTitleTechs>

        <FlexWrapper content="center">
          <AccountsGroup svgGroup={techsSvgsGroup} />
        </FlexWrapper>
      </Container>
    </section>
  );
};
