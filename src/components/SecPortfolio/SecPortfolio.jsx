import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme';
import './SecPortfolioStyle.css'
import Icon_arrow from '../../assets/img/Frame.svg'
import Icon_share from '../../assets/img/icon-share.svg'
import Cards from '../DataProject/DataProject'
const SecPortfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`SecPortfolio ${theme}`} id='Projects'>
      <h2>Portfolio</h2>
      <div className='Title'>
        <div className='Title_Project'>
          <p>My Creative Works</p>
          <p>Latest<span>Projects</span></p>
        </div>
        <div className='button'>
          <button><a href="https://github.com/Ragahad-najjar">View Github</a><img src={Icon_arrow}/></button>
        </div>
      </div>
      <div className='Container-project'>
        {Cards.map((card)=>(
          <div key={card.id} className='Card'>
            <img src={card.image}/>
            <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>{card.description}</span>
              <Link to={`/CardDetails/${card.id}`}>
                <img src={Icon_share} />
              </Link>
            </div>
          </div>
          </div>
        )
        )}
       {/*  <div className='Card'>
          <img src={Project_1}/>
          <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>Html5 - Css3</span>
            <img src={Icon_share}/></div>
          </div>
        </div>
        <div className='Card'>
          <img src={Project_2}/>
          <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>Html5 - Css3</span> 
            <img src={Icon_share}/></div>
          </div>
        </div>
        <div className='Card'>
          <img src={Project_3}/>
          <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>Html5- Css3- BootStrap</span>
            <img src={Icon_share}/></div>
          </div>
        </div>
        <div className='Card'>
          <img src={Project_5}/>
          <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>Html5- Css3- Vanilla javaScript</span>
            <img src={Icon_share}/></div>
          </div>
        </div>
        <div className='Card'>
          <img src={Project_4}/>
          <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>Html5- Css3- React WabPack</span>
            <img src={Icon_share}/></div>
          </div>
        </div>
        <div className='Card'>
          <img src={Project_6}/>
          <div className='Content-text'>
            <p>Educational Platform</p>
            <div className='content'><span>Html5- Css3- React WabPack</span>
            <img src={Icon_share}/></div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default SecPortfolio