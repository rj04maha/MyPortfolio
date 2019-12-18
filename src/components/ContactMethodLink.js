import React from "react";

const ContactMethodLink = props => {
  return (
    <div className="item linky">
      <a href={`${props.link}`} target="_blank" rel="noopener noreferrer linky">
        <i className={`inverted ${props.icon} icon big whitee`}></i>
        {props.description}
      </a>
    </div>
  );
};

export default ContactMethodLink;
