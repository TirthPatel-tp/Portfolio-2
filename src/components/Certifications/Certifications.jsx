import { certifications } from '../../data/certifications';
import styles from './Certifications.module.css';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <h2 className={styles.title}>Certifications</h2>
      
      <div className={styles.grid}>
        {certifications.map((certification, index) => (
          <motion.div 
            key={certification.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={styles.card}
          >
            <div className={styles.icon}>{certification.icon}</div>
            <h3>{certification.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}