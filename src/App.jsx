import { useContext, Fragment } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navigation from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';
import './styles/main.css';

export default function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Fragment>
      <Navigation />
      <main className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <Hero />
        <Projects />

        <Experience />
        <Skills />
        <Certifications />
        <Contact />
        <Footer /> 
      </main>
    </Fragment>
  );
}