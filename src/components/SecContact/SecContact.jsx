/* import React ,{useContext} from 'react'
import './SecContactStyle.css'
import { ThemeContext } from '../contexts/theme';
import img_bac from '../../assets/img/img-bac.png'
const SecContact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Contact ${theme}`}>
      <img src={img_bac}/>
      <div className='ror'>
      <div className='txt-contact'>
        <p className='Content'>Try me out, risk free!</p>
        <p>If you’re not happy with the design after the first draft,</p>
        <p>I’ll refund your deposit,<span> no questions asked</span></p>
      </div>
      <button>Contact</button>
      </div>
      </div>
 )
}

export default SecContact */
import React, { useContext } from 'react'
import './SecContactStyle.css'
import { ThemeContext } from '../contexts/theme';
import img_bac from '../../assets/img/img-bac.png'

const SecContact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`contact-section ${theme}`} id='Contact'>
      <div className="image-container">
        <img src={img_bac} alt="background" className="background-image"/>
      </div>
      <div className="content-overlay">
        <div className="text-content">
          <p className="main-heading">Try me out, risk free!</p>
          <p>If you're not happy with the design after the first draft,</p>
          <p>I'll refund your deposit,<span> no questions asked</span></p>
        </div>
        <button className="contact-button"><a href='#ContactMe'>Contact</a></button>
      </div>
    </div>
  )
}

export default SecContact