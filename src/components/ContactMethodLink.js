import React from "react";

const ContactMethodLink = props => {
  return (
    <div className="item">
      <a
        className="linky"
        href={`${props.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`inverted ${props.icon} icon big whitee`}></i>
        {props.description}
        <i class="right small chevron icon"></i>
      </a>
    </div>
  );
};

export default ContactMethodLink;
