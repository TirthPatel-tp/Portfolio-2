import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Logo from '../../components/images/boy.png'
import Resume from './Tirth-Patel-resume.pdf';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = '#4FD1C5';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles = Array(50).fill().map(() => new Particle());

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <section id="hero" className={styles.hero}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.textContent}
        >
          <h1 className={styles.gradientText}>Tirth Patel</h1>
          <div className={styles.typewriter}>
            <h2>Full-Stack Developer</h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.subtitle}
          >
            Crafting digital experiences with modern web technologies
          </motion.p>

          <motion.a
            href={Resume}
            download="TirthPatel_Resume.pdf"
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
        <motion.div 
          className={styles.socialIcons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          >
          <a href="https://github.com/TirthPatel-tp" target="_blank" rel="noreferrer">
            <FiGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/tirth-patel-tk/" target="_blank" rel="noreferrer">
            <FiLinkedin className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/_tirthpatel_2601/" target="_blank" rel="noreferrer">
            <FiInstagram className={styles.icon} />
          </a>
        </motion.div>
        <div className={styles.stats}>
          <motion.div 
            className={styles.statCard}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>2+</h3>
            <p>Years Experience</p>
          </motion.div>
          
          <motion.div 
            className={styles.statCard}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>10+</h3>
            <p>Projects Completed</p>
          </motion.div>
          
          <motion.div 
            className={styles.statCard}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3>5+</h3>
            <p>Certifications</p>
          </motion.div>
          
        </div>
        </div>
        <div className={styles.imageContainer}>
    <img src={Logo} alt="Profile" className={styles.image} />
  </div>
      </section>
  );
}