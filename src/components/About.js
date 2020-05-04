import React from "react";
import RenderTimeline from "./RenderTimeline";
import "./About.css";

const About = () => {
  return (
    <div className="ui container">
      <br></br>
      <div className="ui two column grid stackable">
        <div className="column">
          <div>
            <h1>Get to know me</h1>
            <p className="about">
              Hi There! Thanks for visiting my website! I am currently on the
              job market for a remote full stack/software developer position. I
              recently graduated from Siena College in upstate New York May 2019
              with a bachelors degree in computer science. Immediately after
              graduation, I worked at New York's largest labor union, CSEA, as a
              computer programmer/analyst. I left there to do Freelance/Contract
              work. My biggest project was creating a SPA to raise money for
              underprivileged middle school students on the MERN stack. Hobbies
              include; traveling, kickboxing, scuba diving and boating. Please
              do not hesitate to reach out. Thanks for reading :)
            </p>
          </div>
        </div>
        <div className="column">
          <div>
            <img
              className="custom-image ui medium centered image"
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
