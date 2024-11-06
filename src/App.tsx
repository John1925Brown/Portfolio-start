import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/projects';
import { Technologies } from './layout/technologies/Technologies';

// Куда-то убрать массивы!!!

const mySkills = [
  { valueTitle: 'Html', value: '80' },
  { valueTitle: 'Css, Sass', value: '80' },
  { valueTitle: 'React', value: '6' },
  { valueTitle: 'Styled components', value: '60' },
  { valueTitle: 'JS', value: '60' },
  { valueTitle: 'TS', value: '60' },
];

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

function App() {
  return (
    <>
      <Header />;
      <Main />
      <Projects />
      <Technologies skills={mySkills} techsSvgsGroup={techsSvgsGroup} />
    </>
  );
}

export default App;
