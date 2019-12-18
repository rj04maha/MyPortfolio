import React from "react";
import Skills from "./Skills";
import "./Home.css";

const About = () => {
  return (
    <div className="blue">
      <div className="ui container">
        <div className="ui two column grid stackable">
          <div className="column">
            <div>
              <h1>Hello, I'm Rachael Mahar!</h1>
              <p className="about">
                I am a full stack developer living in Fort Lauderdale, FL.
              </p>
            </div>
            <br></br>
            <br></br>
            <div>
              <h1>Skills</h1>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
