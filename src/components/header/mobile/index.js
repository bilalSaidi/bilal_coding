import React from "react";
import "./mobile.css";
const Mobile = ({ isOpen, setisOpen }) => {
  return (
    <div className="mobile">
      <div className="close-menu" onClick={() => setisOpen(!isOpen)}>
        <i className="far fa-times-circle"></i>
      </div>
      <div className="mobile-option">
        <div className="list-option">
          <a href="#projects" onClick={() => setisOpen(!isOpen)}>
            <i class="fas fa-code"></i>
            <span>projects</span>
          </a>
        </div>

        <div className="list-option">
          <a href="#education" onClick={() => setisOpen(!isOpen)}>
            <i class="fas fa-user-graduate"></i>
            <span>education</span>
          </a>
        </div>
        <div className="list-option">
          <a href="#skills" onClick={() => setisOpen(!isOpen)}>
            <i class="fas fa-tools"></i>
            <span>skills</span>
          </a>
        </div>
        <div className="list-option">
          <a href="#contact" onClick={() => setisOpen(!isOpen)}>
            <i class="fas fa-user"></i>
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
