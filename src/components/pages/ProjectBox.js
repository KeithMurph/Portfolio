import React from "react";


export default function Portfolio(props) {
  return (
    <div className="bg-info projectCardard card " >
         <h1 id='nameProject'className="card-title text-center" >{props.name}</h1>
         <br></br>
         <hr></hr>
      <div className="img-container" class="rounded mx-auto d-block">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <h1 className='project text-center'>{props.project} </h1>
       <h1 className='tech text-center'> {props.tech}  </h1>
       <hr></hr>
      <h1 className="description text-center">{props.description}</h1>
        <p className="proj-icons-container">
          <a href={props.github} target="_blank" rel="noreferrer">
            <img
              className="project-icon"
              src="https://img.icons8.com/bubbles/100/000000/github.png"
              alt="GitHub"
            />
          </a>
          
          <a href={props.deploy} target="_blank" rel="noreferrer" >
            <img
              className="project-icon"
              src="https://img.icons8.com/clouds/100/000000/domain.png"
              alt="url"
            />
          </a>
        </p>
      
        
      </div>
      <br></br>
    </div>
    
  );
}