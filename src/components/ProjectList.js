import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, onProjectSelect }) => {
  const renderedList = projects.map(proj => {
    return (
      <ProjectItem
        key={proj.id}
        onProjectSelect={onProjectSelect}
        project={proj}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ProjectList;
