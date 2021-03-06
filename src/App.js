import { useContext } from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import {themeContext} from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background : darkMode ? 'black': '',
      color : darkMode? 'white': ''

    }}>
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
