import './App.css';
import Experience from './components/experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Work />
      <Portfolio />
    </div>
  );
}

export default App;
