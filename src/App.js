import { useContext } from 'react';
import { themeContext } from './Context';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <div className="App" 
      style={{
        background: darkMode ? '#0a192f' : 'white',
        color: darkMode ? 'white' : 'black'
      }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;