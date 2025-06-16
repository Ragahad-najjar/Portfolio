import React ,{useContext} from 'react'
import './ContactMeStyle.css'
import {ThemeContext} from '../contexts/theme'
import Address from '../../assets/img/Address.svg'
import email from '../../assets/img/email.svg'
import phone from '../../assets/img/phon.svg'
import Swal from 'sweetalert2'
const ContactMe = () => {
  const { theme } = useContext(ThemeContext);
  const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append("access_key", "7398079f-d9e4-450c-ba0f-a831400b54a5");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
      }
    };
  return (
    <div className={`ContactMe ${theme}`}  id="ContactMe">
      <h2>Contact</h2>
      <div className='Title'>
        <div className='Title_Project'>
          <p>Let’s Discuss Your <span>Project</span> </p>
        </div>
        <div className='ContactContainer'>
          <div className='ContactInfo'>
            <div className='ContactDetails'>
              <img src={phone}/>
              <div className='Info'><p>Call me</p>
              <span>0937396257</span></div>
            </div>
            <div className='ContactDetails'>
              <img src={email}/>
              <div className='Info'><p>Email me </p>
              <span>raghad.abdnajjar2001@gmail.com</span></div>
            </div>
            <div className='ContactDetails'>
              <img src={Address}/>
              <div className='Info'><p>Address </p>
              <span>Damascus,syria</span></div>
            </div>
          </div>
          <div className='ContactInputForm'>
            <form className="form" onSubmit={onSubmit } >
            <div className='input-group'>
              <div className="input-box">
                <input type='text' placeholder='Full name' className='field' name='name' required/>
                <input type='Email' placeholder='Your email' className='field' name='email' required/>
              </div>
              <div className="input-box">
                <input type='phone' placeholder='Phone number' className='field_1' name='phone' required/>
              </div>
              <div className="input-box">
                <textarea name='message' id='Mess' className='field' placeholder='Message' required></textarea>
              </div>
            </div>
            <div className="input-group-2">
              <button type="submit" className='btn'>Send Message</button>
            </div>
          </form>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ContactMe