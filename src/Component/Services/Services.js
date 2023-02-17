import React, {useContext} from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from "../Services/CV.pdf"
import { themeContext } from "../../Context";
const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services'>
        <div className='s-left'>
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className='s-right'>
          <div className='card1'>
            <Card emoji= {Glasses} heading = {'Repair(Hardware)'} 
            detail={"Screen repair, mother board repair, Keyboard, mouse pad, ram and hard drive replacement "} />
          </div>
          <div className='card2'>
            <Card emoji= {HeartEmoji} heading = {'Developer'} 
            detail={"html, Css, JavaScript, React and Express(backend for react app)"} />

          </div>
          <div className='card3'>
            <Card emoji= {Humble} heading = {'Software Installation'} 
            detail={" i can window 7,10, and 11 and also the application software that you need"} />
          </div>
        </div>
    </div>
  )
}

export default Services