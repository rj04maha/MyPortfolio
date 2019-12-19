import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="white">
      <div className="ui container">
        <div className="ui secondary menu">
          <div className="item">
            <Link to="/">
              <img
                className="ui mini image"
                src="/images/rblue.PNG"
                alt="r"
              ></img>
            </Link>
          </div>
          <div className=" menu">
            <Link to="/" className="menu-link item">
              Home
            </Link>
            <Link to="/about" className="menu-link item">
              About
            </Link>
            <Link to="/projects" className="menu-link item">
              Projects
            </Link>
            <Link to="/contact" className="menu-link item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
