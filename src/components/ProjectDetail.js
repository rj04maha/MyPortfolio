import React from "react";
import List from "./List";

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div>
        Select a project to take a better look at the technologies I used.
      </div>
    );
  }
  return (
    <div className="ui segment">
      <h2 className="black">{project.title}</h2>
      <h3 className="black">{project.company}</h3>
      <div>
        <img
          className="ui fluid image"
          src={`./projectimages/${project.media}`}
          alt="example"
        ></img>
      </div>
      <h3 className="black">About this project</h3>
      <p className="black">{project.description}</p>
      <h3 className="black">Technology Used</h3>
      <List arr={project.technologies} />
      <h3 className="black">See more about this</h3>

      <div>
        <a target="_blank" rel="noopener noreferrer" href={project.source}>
          <button class="ui button">
            {project.linkdes}
            <i class="right chevron icon"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
