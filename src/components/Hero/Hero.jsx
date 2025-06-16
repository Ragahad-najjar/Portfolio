import React , { useContext } from 'react'
import './HeroStyle.css'
import { ThemeContext } from '../contexts/theme';
import HeroImg from '../../assets/img/HeroImage.png'

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Hero ${theme}`}>
      <div className='box'>
        <div className='boxText'>
          <h1><span className='Text'>HEY!</span>I’m Raghad,</h1>
          <h1>Frontend Developer </h1>
          <p className='txt'>Agency-quality Webflow websites with</p>
          <p>the personal touch of a freelancer.</p>
        </div>
        <button className='btnCv'><a href='https://drive.google.com/file/d/1SeXZadz2bwRngvhi5DuqzyKdP5YtHeIA/view?usp=drivesdk'>Download CV</a></button>
      </div> 
    <div className='ImgHero'>
      <img  src={HeroImg} alt=""/>
    </div>
    </div>
  )
}
export default Hero
