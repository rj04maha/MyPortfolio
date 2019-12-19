import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <div onClick={() => onProjectSelect(project)} className="project-item item">
      <button class="content fluid ui button">
        {project.title}
        <i class="right chevron icon"></i>
      </button>
    </div>
  );
};

export default ProjectItem;
