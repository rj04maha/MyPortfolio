import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <div onClick={() => onProjectSelect(project)} className="project-item item">
      <img
        className="pic ui middle aligned small image"
        src={`./projectimages/${project.media}`}
        alt="example"
      ></img>{" "}
      <div className="content">
        <div className="header">{project.title}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
