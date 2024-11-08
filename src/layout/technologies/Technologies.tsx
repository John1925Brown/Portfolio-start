import styled from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { Container } from '../../components/Container';
import { Theme } from '../../styles/Theme';

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

export const Technologies = (props: { skills: Array<TypeSkill> }) => {
  return (
    <StyledTechnologies>
      <Container>
        <SectionTitle title="Technologies" />

        <ProgressContainer>
          <FlexWrapper direction="column" align="center" gap="25px">
            {props.skills.map((skill, index) => {
              return (
                <li key={index}>
                  <ProgressText>{skill.valueTitle}</ProgressText>
                  <progress max="100" value={skill.value}></progress>
                </li>
              );
            })}
          </FlexWrapper>
        </ProgressContainer>

        <AddTitleTechs>Additional technologies and skills</AddTitleTechs>

        <FlexWrapper content="center">
          <AccountsGroup svgGroup={techsSvgsGroup} />
        </FlexWrapper>
      </Container>
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.section`
  margin-bottom: 170px;
`;

const ProgressContainer = styled.ul`
  width: 100%;
  margin-bottom: 120px;

  & progress {
    width: 670px;
    height: 15px;
    -webkit-appearance: none;
    appearance: none;

    &::-webkit-progress-bar {
      background-color: #162950;
      border-radius: 83px;
    }

    &::-webkit-progress-value {
      background: ${Theme.colors.gradientBg};
      border-radius: 83px;
    }
    &::-moz-progress-bar {
      background: ${Theme.colors.gradientBg};
      border-radius: 83px;
    }
  }
`;

const ProgressText = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-left: 25px;
`;

const AddTitleTechs = styled.h3`
  font-weight: 600;
  font-size: 44px;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;
