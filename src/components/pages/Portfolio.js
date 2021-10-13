import React from "react";

import ProjectCard from "./ProjectBox";
import projects from "../../project.json";



export default function Portfolio() {
  
  function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
  }
  return (
    <div className="bg-dark">
    
    <div className="container bg-body rounded">
      <div className="bg-secondary project" >
        <h1 id='portfolio' className="top-title text-center text-light" >My Portfolio</h1>
        <br></br>
        <br></br>
      </div>

      <Wrapper id="card-data" >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            project={project.project}
            github={project.github}
            tech={project.tech}
            description={project.description}
            deploy={project.deploy}
           
            
          
          />
        
      
         
        ))}
  
      
      </Wrapper>
      <div className='block'>

      </div>

           
    </div >
    </div>

  );
  
}
