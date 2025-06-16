import React ,{useContext}from 'react'
import './SecAboutMeStyle.css'
import { ThemeContext } from '../contexts/theme';
import Skill from '../../assets/img/skills.png'
import Icon_90 from '../../assets/img/90.svg'
import Icon_80 from '../../assets/img/80.svg'
import Icon_95 from '../../assets/img/95.svg'
export const SecAboutMe = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`SecAboutMe ${theme}`} id='About me'>
      <div className='Skills'>
        <img src={Skill} alt=""/>
      </div>
      <div className='TextAboutMe'>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed</p>
        <p>massa nibh lectus netus in. Aliquet donec morbi convallis</p>
        <p>pretium. Turpis tempus pharetra</p>
        <div className='BoxSkills'>
          <div className='skill-bar'>
            <div className="info">
              <p>HTML5</p>
              <img src={Icon_90} className='Icon-90'/>
            </div>
            <div className='bar'>
              <span className='Html'></span>
            </div>
          </div>
          <div className='skill-bar'>
            <div className="info">
              <p>CSS3</p>
              <img src={Icon_80} className='Icon-80'/>
            </div>
            <div className='bar'>
              <span className='Css'></span>
            </div>
          </div>
          <div className='skill-bar'>
            <div className="info">
              <p>JavaScript</p>
              <img src={Icon_95} className='Icon-95'/>
            </div>
            <div className='bar'>
              <span className='javaScript'></span>
            </div>
          </div>
          <div className='skill-bar'>
            <div className="info">
              <p>React</p>
              <img src={Icon_90} className='Icon-90'/>
            </div>
            <div className='bar'>
              <span className='React'></span>
            </div>
          </div>
      </div>
      </div>       
    </div>
  )
}
export default SecAboutMe
