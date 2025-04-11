import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.2}
        className={styles.card}
      >
        <div className={styles.imageContainer}>
          <img src={project.image} alt={project.title} />
          <div className={styles.links}>
            <a href={project.github} target="_blank" rel="noreferrer">
              <FiGithub className={styles.icon} />
            </a>
          </div>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStack}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}