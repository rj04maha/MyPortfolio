import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="white">
      <div className="ui secondary menu">
        <div className="item">
          <Link to="/">
            <img
              className="ui mini image"
              src="/images/rblue.png"
              alt="r"
            ></img>
          </Link>
        </div>
        <div className="right menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/about" className="item">
            About
          </Link>
          <Link to="/projects" className="item">
            Projects
          </Link>
          <Link to="/contact" className="item">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
