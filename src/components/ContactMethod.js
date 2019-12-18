import React from "react";

const ContactMethod = props => {
  return (
    <div className="item">
      <i className={`${props.icon} icon big dusty`}></i>
      {props.description}
    </div>
  );
};

export default ContactMethod;
