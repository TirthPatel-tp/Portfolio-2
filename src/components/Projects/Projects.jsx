import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.title}
      >
        Featured Projects
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}