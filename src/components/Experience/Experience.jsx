import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';


// src/data/experience.js
export const experiences = [
    {
      title: "I&IT Analyst (Designer)",
      company: "Ministry of Public and Business Service Delivery (MPBSD)",
      date: "Sept 2024 – Dec 2024",
      points: [
        "Designed and developed digital forms for various government programs using JavaScript for enhanced interactivity",
        "Ensured AODA compliance through accessibility features like screen reader compatibility and tooltips",
        "Standardized form designs across government departments to meet latest regulations",
        "Collaborated with cross-functional teams to ensure forms met DEV/UAT/PROD requirements",
        "Streamlined form submission workflows by creating interconnected departmental forms",
        "Managed server integration for seamless cross-departmental form functionality"
      ]
    },
    {
      title: "I&IT Analyst (QA)",
      company: "Ministry of Public and Business Service Delivery (MPBSD)",
      date: "Apr 2024 – Aug 2024",
      points: [
        "Conducted QA testing on legacy government website (20+ years old)",
        "Identified and documented 150+ accessibility/compliance issues per AODA standards",
        "Led migration of 2M+ user records to updated platform with 99.9% data integrity",
        "Modernized website navigation and user experience",
        "Collaborated with developers to resolve 200+ documented issues"
      ]
    },
    {
      title: "IELTS Instructor",
      company: "Shree Hari - Kalol, Gujarat, India",
      date: "Jan 2022 – Jul 2022",
      points: [
        "Trained 50+ students in English proficiency and test-taking strategies",
        "Developed personalized learning plans improving average scores by 1.5 bands",
        "Implemented time management techniques reducing test anxiety by 40%",
        "Maintained 95% student satisfaction rate through supportive environment"
      ]
    },
    {
      title: "Python Instructor",
      company: "NIT Computer Training Center - Kalol, India",
      date: "Feb 2022 – Jul 2022",
      points: [
        "Taught Python programming fundamentals to 80+ students",
        "Developed curriculum covering OOP concepts and practical applications",
        "Implemented project-based learning increasing student retention by 35%",
        "Provided individualized support reducing assignment incompletion by 60%"
      ]
    },
    {
      title: "Customer Service Representative",
      company: "Vodafone – Ahmedabad, India",
      date: "Jul 2021 – Jan 2022",
      points: [
        "Handled 100+ daily customer inquiries with 98% satisfaction rate",
        "Reduced complaint resolution time by 25% through process optimization",
        "Maintained 100% accurate transaction records in CRM system",
        "Trained 15 new team members on billing system protocols"
      ]
    }
  ];

  export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Professional Experience</h2>
      
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={styles.timelineItem}
          >
           <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className={styles.date}>{exp.date}</span>
              <ul className={styles.points}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

