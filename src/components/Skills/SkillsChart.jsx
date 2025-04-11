import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsChart.module.css';

const SkillsChart = ({ skills }) => {
  return (
    <div className={styles.chart}>
      {skills.map((skill, index) => (
        <div key={skill.name} className={styles.skillItem}>
          <div className={styles.skillInfo}>
            <span className={styles.skillName}>{skill.name}</span>
            <span className={styles.skillPercent}>{skill.level}%</span>
          </div>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsChart;


