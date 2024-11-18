import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import project1Path from '../../../assets/images/project-1.jpg';
import project2Path from '../../../assets/images/project-2.jpg';
import project3Path from '../../../assets/images/project-3.jpg';
import project4Path from '../../../assets/images/project-4.jpg';
import { Container } from '../../../components/Container';
import React, { useState } from 'react';
import { S } from './Projects_Styles';
import { Tabs } from './tabs/Tabs';
import { AnimatePresence, motion } from 'framer-motion';

const tabsData: Array<{
  status: 'all' | 'landing' | 'react' | 'spa';
  title: string;
}> = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'Landing',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'Spa',
    status: 'spa',
  },
];

const projectsData = [
  {
    src: project1Path,
    title: 'PROJECT 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'landing',
  },

  {
    src: project2Path,
    title: 'PROJECT 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    type: 'react',
  },
  {
    src: project3Path,
    title: 'PROJECT 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt , consectetur adipiscing elit, ut labore et dolore, consectetur adipiscing elit, sit amet, dolor sit amet, magna aliqua. ',
    type: 'spa',
  },
  {
    src: project4Path,
    title: 'PROJECT 4',
    description:
      'Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, tempor incididunt ut labore',
    type: 'react',
  },
  {
    src: project1Path,
    title: 'PROJECT 5',
    description:
      'Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, tempor incididunt ut labore',
    type: 'spa',
  },
];

export const Projects: React.FC = () => {
  const [currentTabsStatus, setCurrentTabsStatus] = useState('all');
  let filteredProjects = projectsData;

  if (currentTabsStatus === 'landing') {
    filteredProjects = projectsData.filter((project) => {
      return project.type === 'landing';
    });
  }

  if (currentTabsStatus === 'react') {
    filteredProjects = projectsData.filter((project) => {
      return project.type === 'react';
    });
  }

  if (currentTabsStatus === 'spa') {
    filteredProjects = projectsData.filter((project) => {
      return project.type === 'spa';
    });
  }

  const changeTabsStatus = (status: 'all' | 'landing' | 'react' | 'spa') => {
    setCurrentTabsStatus(status);
  };

  return (
    <S.Projects id={'projects'}>
      <Container>
        <SectionTitle title="Projects"></SectionTitle>

        <Tabs
          tabsItems={tabsData}
          changeTabsStatus={changeTabsStatus}
          currentTabsStatus={currentTabsStatus}
        />

        <ul>
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              return (
                <motion.li
                  layout
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex' }}
                >
                  <Project
                    description={project.description}
                    title={project.title}
                    src={project.src}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </Container>
    </S.Projects>
  );
};
