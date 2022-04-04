import React from "react";

import ProjectCard from "./ProjectBox";
import projects from "../../project.json";

export default function Portfolio() {
  function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
  }
  return (
    <div>
      <div className="container">
        <div>
          <h1 id="portfolio" className="top-title text-center">
            My Portfolio
          </h1>
        </div>

        <Wrapper id="card-data">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              project={project.project}
              tech={project.tech}
              github={project.github}
              description={project.description}
              deploy={project.deploy}
            />
          ))}
        </Wrapper>
        <div className="block"></div>
      </div>
    </div>
  );
}
