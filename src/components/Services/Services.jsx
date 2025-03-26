import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card.jsx'
import Resume from './TirthPatel.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
    const transition = { duration:1, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            {/* left side  */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>
                <strong>Here are the services I offer:</strong>
                <ul>
                    <li>Web Design and Development (React, Angular, Django)</li>
                    <li>Responsive UI/UX Design</li>
                    <li>Front-End Development with HTML, CSS, and JavaScript</li>
                    <li>Node.js Backend Development</li>
                    <li>C++ Programming</li>
                    <li>Angular Application Development</li>
                    <li>Database Management (SQL, MongoDB)</li>
                    <li>API Development (RESTful APIs)</li>
                </ul>
                
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
                <div className="certifications">
                <span>Certifications:</span>
                <ul>
                    <li>React (LinkedIn)</li>
                    <li>Python Essentials</li>
                    <li>Git & GitHub</li>
                    <li>Angular</li>
                    <li>MySQL</li>
                </ul>
                </div>
                <a href={Resume} download>
                    <button className="s-button button">Download CV</button>
                </a>
            </div>
            {/* right side  */}
            <div className="cards">
                <motion.div 
                initial={{left: '24rem'}}
                whileInView={{left: '14rem'}}
                transition={transition}
                
                style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Project Management '}
                        detail={"Scrum, Agile, UML"}
                        selectedDetails ={ " I have created several project using this language "} />
                </motion.div>
                {/* Second Card  */}
                <motion.div
                 whileInView={{top: '12rem', left: '-4rem' }}
                 initial={{ left: '4rem' }}
                 transition={transition}
                style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Full-Stack'}
                        detail={"HTML, CSS, JS, React, Node.js, c++, Angular"} 
                        selectedDetails ={ "Built 10+ projects including iNotebook and KJ-Infrastructure"}
                        />
                </motion.div>
                {/* Third Card  */}
                <motion.div 
                 whileInView={{top: '19rem', left: '12rem'}}
                 initial={{ left: '2rem'}}
                 transition={transition}
                style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Creating user-friendly interfaces, figma"} 
                        selectedDetails ={ " I have created several project using this language "}/>
                        
                </motion.div>
               <div className="blur s-blur2" style={{background: "var(--purple)"}}></div> 
            </div>
        </div>
    )
}

export default Services