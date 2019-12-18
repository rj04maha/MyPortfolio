import React from "react";
import "./Button.css";

const Button = props => {
  return <button class="custom-button ui inverted button">{props.info}</button>;
};

export default Button;
