import styled from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { AccountsGroup } from '../../components/accountsGroup/AccountsGroup';

export const Technologies = (props: {
  skills: Array<object>;
  techsSvgsGroup: Array<object>;
}) => {
  return (
    <StyledTechnologies>
      <SectionTitle title="Technologies" />

      {/*<ProgressText>{skill.valueTitle}</ProgressText>
              <progress max="100" value={skill.value}></progress>
              Ошибки Property 'valueTitle' does not exist on type 'object'. */}

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
        <AccountsGroup svgGroup={props.techsSvgsGroup} />
      </FlexWrapper>
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.section`
  margin: 0 auto;
  width: 80%;
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
      background: linear-gradient(90deg, #945dd6, #13adc7);
      border-radius: 83px;
    }
    &::-moz-progress-bar {
      background: linear-gradient(90deg, #945dd6, #13adc7);
      border-radius: 83px;
    }
  }
`;

const ProgressText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  margin-left: 25px;
`;

const AddTitleTechs = styled.h3`
  font-weight: 600;
  font-size: 44px;
  color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;
