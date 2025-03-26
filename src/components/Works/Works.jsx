import React from 'react'
import './Works.css'
import Vodafone from "../../img/Vodafone.png"
import NIT from "../../img/NIT.png"
import ShreeHari from "../../img/ShreeHari.png"
import Ontartio from "../../img/Ontario.png"
import McDonalds from "../../img/McDonalds.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';


function Works() {
    

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        {/* Left side  */}
        <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Works for all these</span>
                <span>Brands & Clients</span>
                <span><h1>Here are some of the companies I've worked with:</h1>
                <ul style={{color: darkMode? 'grey': ''}}>
                    <li>
                        <strong style={{color: darkMode? 'white': ''}}>Ministry of Public and Business Service Delivery (MPBSD)</strong> - I&IT Analyst (Designer & QA)<br />
                        • Designed government digital forms with JavaScript<br />
                        • Led AODA-compliant accessibility testing<br />
                        • Managed data migration for legacy systems
                    </li><br></br>
                    <li>
                        <strong style={{color: darkMode? 'white': ''}}>Shree Hari Institute</strong> - IELTS Instructor<br />
                        • Taught test strategies and English fundamentals<br />
                        • Provided personalized student feedback
                    </li><br></br>
                    <li>
                        <strong style={{color: darkMode? 'white': ''}}>NIT Computer Training Center</strong> - Python Instructor<br />
                        • Instructed OOP concepts and Python programming<br />
                        • Evaluated student projects and assignments
                    </li><br></br>
                    <li>
                        <strong style={{color: darkMode? 'white': ''}}>Vodafone</strong> - Customer Service Representative<br />
                        Provided excellent customer support, handled inquiries, and resolved issues in a professional manner.
                    </li>
                </ul>
                </span>
               
                <Link to="contact" smooth={true} spy={true}>
                          <button className="button s-button">Hire me</button>
                        </Link>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* Right side  */}
            <div className="w-right">
                <motion.div 
                initial={{ rotate: 45}}
                whileInView={{ rotate: 0}}
                viewport={{ margin: '-45px'}}
                transition = {{ duration:3.5, type: 'spring' }}

                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={NIT} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Vodafone} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={ShreeHari} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={McDonalds} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Ontartio} alt=''/>
                    </div>
                </motion.div>
                    {/* Background Circles  */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
  )
}

export default Works