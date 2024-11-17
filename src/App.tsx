import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Experience } from './layout/sections/experience/Experience';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Technologies } from './layout/technologies/Technologies';
import { Projects } from './layout/sections/projects/Projects';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';

// Куда-то убрать массив!!

const mySkills = [
  { valueTitle: 'Html', value: '80' },
  { valueTitle: 'Css, Sass', value: '80' },
  { valueTitle: 'React', value: '6' },
  { valueTitle: 'Styled components', value: '60' },
  { valueTitle: 'JS', value: '60' },
  { valueTitle: 'TS', value: '60' },
];

function App() {
  return (
    <>
      <Particle />
      <Header />
      <Main />
      <Projects />
      <Technologies skills={mySkills} />
      <Experience />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </>
  );
}

export default App;
