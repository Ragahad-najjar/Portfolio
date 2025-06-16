import React , { useContext } from 'react'
import './FooterStyle.css'
import { ThemeContext } from "../contexts/theme";
import IconFacebook from './../../assets/img/facebook.svg'
import IconLinkedin from './../../assets/img/linkedin.svg'
import IconInstgram from './../../assets/img/instagram.svg'
const Footer = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <>
    <div className={`Footer ${theme}`}>
      <p>@ 2025. All Rights Reserved</p>
      <p>Develpoment by Raghad</p>
      <div className='Icon_Socail'>
        <a href='https://www.facebook.com/raghad.najjar.73?mibextid=ZbWKwL' target="_blank"><img src={IconFacebook}/></a>
        <a href='https://www.linkedin.com/in/Raghad Najjar/' ><img src={IconLinkedin}/></a>
        <a href='https://www.instagram.com/raghad.najjar.73/' target='_blank'><img src={IconInstgram}/></a>
      </div>
    </div>
  </>
  )
}

export default Footer