import React from "react";
import RenderTimeline from "./RenderTimeline";

const About = () => {
  return (
    <div className="ui container">
      <div className="ui two column grid stackable">
        <div className="column">
          <div>
            <h1 className="ui">Get to know me</h1>
            <p className="about">
              Hiii, thanks for visiting my website! I am currently on the job
              market for a full stack/software developer position in Fort
              Lauderdale area (or remote). I recently graduated from Siena
              College in upstate New York this past May with a bachelors degree
              in computer science. I worked at New York's largest labor union,
              CSEA, as a computer programmer/analyst for 6 months before moving
              down to the sunshine state! Hobbies include; traveling,
              kickboxing, scuba diving and boating. Please do not hesitate to
              reach out. Thanks for reading :)
            </p>
          </div>
        </div>
        <div className="column">
          <div>
            <img
              className="ui medium centered image"
              alt="Rachael Mahar"
              src="./images/me.png"
            ></img>
          </div>
        </div>
      </div>
      <h1 className="ui">What I've been up to</h1>
      <RenderTimeline />
    </div>
  );
};

export default About;
