import React from "react";
import Button from "./Button";

const Skills = () => {
  let arr = [
    "Web Development",
    "Server Side Programming Lanuages",
    "RESTful APIs",
    "SQL",
    "Relational Databases",
    "Object Oriented Programming",
    "Agile Methodologies",
    "Git/Github",
    "Linux",
    "UI/UX Design"
  ];
  return (
    <div>
      {arr.map(listItem => {
        return <Button info={listItem} />;
      })}
    </div>
  );
};

export default Skills;
