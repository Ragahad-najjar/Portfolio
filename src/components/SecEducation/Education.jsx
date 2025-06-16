import React ,{useContext} from 'react'
import { ThemeContext } from '../contexts/theme';
import './EducationStyle.css'
import Line_ver from '../../assets/img/Line-ver.svg'
const Education = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Education ${theme}`} id="Education">
      <div className='Title'>
        <h2>Education and Experience</h2>
        <h1>Education & Experience</h1>
      </div>
      <div className='container'>
        <div className='txt-education'>
          <img src={Line_ver}/>
          <div className='timeline-items'>
            <div className='timeline-content'>
              <h3>Electronic and Communication</h3>
              <p> I Study Electronic and Communication Engineering at Damascus University.</p>
            </div>
            <div className='timeline-content'>
              <h3>Smart Device </h3>
              <p>Studied The 'Smart Device & Emerging Technologies' course from Yonsei University in South Korea
              / online on Coursera .</p>
            </div>
          </div>
        </div>
        <div className='txt-education'>
          <img src={Line_ver}/>
          <div className='timeline-items'>
            <div className='timeline-content'>
              <h3>Front-End Developer</h3>
              <p> Website programming 'Front-end Development with Vica Web Solution -Zero Point.</p>
            </div>
            <div className='timeline-content'>
              <h3>IOT (internet of things) Wireless</h3>
              <p> studied The 'IOT(internet of things) Wireless & cloud Computing Emerging Technologies' course from Yonsei University in South Korea
              / online on Coursera.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education