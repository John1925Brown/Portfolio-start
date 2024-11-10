import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import project1Path from '../../../assets/images/project-1.jpg';
import project2Path from '../../../assets/images/project-2.jpg';
import project3Path from '../../../assets/images/project-3.jpg';
import project4Path from '../../../assets/images/project-4.jpg';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Projects_Styles';

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle title="Projects"></SectionTitle>

        <FlexWrapper wrap="wrap" content="space-between" gap="60px 40px">
          <Project src={project1Path} titleValue="PROJECT 1" />
          <Project src={project2Path} titleValue="PROJECT 2" />
          <Project src={project3Path} titleValue="PROJECT 3" />
          <Project src={project4Path} titleValue="PROJECT 4" />
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
