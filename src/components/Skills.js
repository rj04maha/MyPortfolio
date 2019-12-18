import React from "react";
import List from "./List";

const Skills = () => {
  let skills = [
    "Web Development",
    "Server Side Programming Lanuages",
    "RESTful APIs",
    "SQL",
    "Relational and NoSQL Databases",
    "Object Oriented Programming",
    "Agile Methodologies",
    "Git/Github",
    "Linux",
    "UI /UX Design"
  ];
  return (
    <div className="about">
      <List arr={skills} />
    </div>
  );
};

export default Skills;
