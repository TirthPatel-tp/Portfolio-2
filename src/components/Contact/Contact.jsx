// Contact.jsx (updated for better dark mode)
import React, { useContext, useRef, useState } from "react";
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context/ThemeContext';
import { FiCheckCircle, FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_yjz8w2o',
        'template_5t2e5cl',
        form.current,
        'Dde1eLkGmmWfJY6aJ'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setTimeout(() => setDone(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={`${styles.contact} ${darkMode ? styles.dark : ''}`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>Let's build something amazing together</p>
      </motion.div>

      <motion.div 
        className={styles.formWrapper}
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.inputGroup}>
            <FiUser className={styles.inputIcon} />
            <input
              type="text"
              name="user-name"
              className={styles.user}
              placeholder="Name"
              required
            />
            <span className={styles.inputBorder}></span>
          </div>

          <div className={styles.inputGroup}>
            <FiMail className={styles.inputIcon} />
            <input
              type="email"
              name="user-email"
              className={styles.user}
              placeholder="Email"
              required
            />
            <span className={styles.inputBorder}></span>
          </div>

          <div className={styles.inputGroup}>
            <FiMessageSquare className={styles.inputIcon} />
            <textarea
              name="message"
              className={styles.user}
              placeholder="Message"
              rows="5"
              required
            />
            <span className={styles.inputBorder}></span>
          </div>

          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(79, 209, 197, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend className={styles.buttonIcon} />
            Send Message
          </motion.button>
          
          {done && (
            <motion.div
              className={styles.success}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <FiCheckCircle /> Message Sent Successfully!
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;