import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';

import project1Path from '../../../assets/images/project-1.jpg';
import project2Path from '../../../assets/images/project-2.jpg';
import project3Path from '../../../assets/images/project-3.jpg';
import project4Path from '../../../assets/images/project-4.jpg';
import { Theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle title="Projects"></SectionTitle>
        {/* Переделать на грид!!! */}
        <FlexWrapper wrap="wrap" content="space-between" gap=" 60px 0">
          <Project src={project1Path} titleValue="PROJECT 1" />
          <Project src={project2Path} titleValue="PROJECT 2" />
          <Project src={project3Path} titleValue="PROJECT 3" />
          <Project src={project4Path} titleValue="PROJECT 4" />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background: ${Theme.colors.secondaryBg};
  padding-bottom: 140px;
`;
