import React, { useContext  } from 'react';
import'./CardDetailsStyle.css'
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../components/contexts/theme';
import Cards from '../../components/DataProject/DataProject'

const CardDetails = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
    const project = Cards.find(item => item.id === parseInt(id));
     if (!project) {
    return <div className={`CardDetails ${theme}`}>Project not found!</div>;
  }

  return (
    < >
    <div className={`CardDetails ${theme}`}>
      <img src={project.image} alt={`Project ${project.id}`} />
      <div className="project-details">
        <h3>Educational Platform</h3>
        <p className='Text'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed</p>
        <p className='Text'> massa nibh lectus netus in. Aliquet donec morbi convallis</p>
        <p>Basic Languages : <span>{project.description}</span></p>
        <p>Framework: <span>Bootstrap</span></p>
        <p>Libraries:<span>React</span></p>
        <a href={project.githubLink}><button>Github Repo</button></a>
      </div>
    </div>
    </>
  );
}

export default CardDetails