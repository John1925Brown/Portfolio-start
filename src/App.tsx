import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/projects';

function App() {
  return (
    <>
      <Header />;
      <Main />
      <Projects />
    </>
  );
}

export default App;
