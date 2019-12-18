import React from "react";
import ContactMethod from "./ContactMethod";
import ContactMethodLink from "./ContactMethodLink";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="ui blue">
      <h1 className="ui center aligned icon header">
        <div className="whitee">Contact Me</div>
        <br></br>
        <i className="hand peace icon whitee"></i>
      </h1>
      <br></br>
      <br></br>
      <div className="ui equal width center aligned stackable one column grid">
        <div className="column">
          <div className="ui big animated list">
            <ContactMethod
              icon="envelope"
              description="rj04maha@alum.siena.edu"
            />
            <ContactMethod icon="phone" description="518.728.9402" />
            <ContactMethodLink
              icon="linkedin"
              description="rachael-mahar"
              link="https://www.linkedin.com/in/rachael-mahar/"
            />
            <ContactMethodLink
              icon="github"
              description="rj04maha"
              link="https://github.com/rj04maha/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
