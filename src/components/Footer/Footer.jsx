// Footer.jsx
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${darkMode ? styles.dark : ''}`}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.socialLinks}>
          <motion.a 
            href="https://github.com/TirthPatel-tp" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            <FiGithub className={styles.icon} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tirth-patel-tk/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            <FiLinkedin className={styles.icon} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_tirthpatel_2601/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            <FiInstagram className={styles.icon} />
          </motion.a>
          <motion.a
            href="mailto:pateltirthpatel1011@gmail.com"
            whileHover={{ y: -3 }}
          >
            <FiMail className={styles.icon} />
          </motion.a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Tirth Patel. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}