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
      <h2>{project.title}</h2>
      <h3>{project.company}</h3>
      <div>
        <img
          className="ui fluid image"
          src={`./projectimages/${project.media}`}
          alt="example"
        ></img>
      </div>
      <h3>About this project</h3>
      <p>{project.description}</p>
      <h3>Technology Used</h3>
      <List arr={project.technologies} />
      <h3>See more about this</h3>

      <div>
        <a
          className="item"
          href={`${project.source}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.linkdes}
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
