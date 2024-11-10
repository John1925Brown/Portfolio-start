import styled from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

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

const StyledTechnologies = styled.section``;

const ProgressContainer = styled.ul`
  width: 100%;
  margin-bottom: 120px;

  & progress {
    margin: 0 auto;
    width: calc(100vw * 0.625);
    height: 15px;
    -webkit-appearance: none;
    appearance: none;

    &::-webkit-progress-bar {
      background-color: #162950;
      border-radius: 83px;
    }

    &::-webkit-progress-value {
      background: ${theme.colors.gradientBg};
      border-radius: 83px;
    }
    &::-moz-progress-bar {
      background: ${theme.colors.gradientBg};
      border-radius: 83px;
    }
  }

  @media ${theme.media.tablet} {
    margin-bottom: 100px;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 60px;
  }
`;

const ProgressText = styled.p`
  ${font({ weight: 600, Fmax: 24, Fmin: 18 })};
  margin-left: 25px;
`;

const AddTitleTechs = styled.h3`
  ${font({ weight: 600, Fmax: 44, Fmin: 25, color: theme.colors.font })}
  display: flex;
  justify-content: center;
  margin-bottom: 70px;

  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`;
