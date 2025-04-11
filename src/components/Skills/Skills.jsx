import { skills, softSkills } from '../../data/skills';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Technical Skills</h2>
      
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={styles.skill}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className={styles.barContainer}>
              <motion.div 
                className={styles.bar}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              >
                <span>{skill.level}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className={styles.subtitle}>Soft Skills</h2>
      <div className={styles.softSkills}>
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={styles.softSkill}
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}