import React, { useContext } from "react";
import './Intro.css'

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hey! I Am</span>
                <span>Muhammed B Njie</span>
                <span>
            Frontend Developer with high  in web designing
            and development, producting the Quality work and I also Repair(Hardware) and software installation both System and application software
          </span>
            </div>
            <button className='button i-button'>Hire Me</button>
            <div className='i-icons'>
                <img src={Github} alt=''/>
                <img src={LinkedIn} alt=''/>
                <img src={Instagram} alt=''/>
            </div>
        </div>
        <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
       
        <div className='main-fd1'>
            <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </div>
        <div className='main-fd2'>
            <FloatingDiv image={thumbup} text1="Best Hardware Repairs" text2="Software Installation" />
        </div>

        <div className='blur' style={{background: "#FA4D56"}}></div>
        <div className='blur' 
        style={{
            background: "#F1C21B",
            top: "17rem",
            width: "21rem",
            height: "11rem",
           
            }}>

            </div>
        </div>
    </div>
  )
}

export default Intro