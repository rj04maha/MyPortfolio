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
          <div className="menu">
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
          <div className="right menu">
            <a
              href="https://docs.google.com/document/d/1wuyXiWsVhIcU-THH8aM_E0x3rEPYyPAOX1H5XiN9xy8/edit?usp=sharing"
              className="no-hover item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ui button resume-button">
                Download My Resume<i class="right chevron icon"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
