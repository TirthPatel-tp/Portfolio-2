import { Link } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import styles from './Navbar.module.css';
// import Logo from '../images/logo.png';

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* <Link to={Logo} smooth={true} className={styles.logo}/> */}
        <Link to="hero" smooth={true} className={styles.logo}>
          TP Portfolio
        </Link>
        
        <div className={styles.navLinks}>
          <Link to="projects" smooth={true} className={styles.navLink}>
            Projects
          </Link>
          <Link to="skills" smooth={true} className={styles.navLink}>
            Skills
          </Link>
          <Link to="contact" smooth={true} className={styles.navLink}>
            Contact
          </Link>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeToggle}
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
    </header>
  );
};

