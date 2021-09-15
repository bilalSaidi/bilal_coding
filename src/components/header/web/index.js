import React from "react";
import "./web.css";
function Web() {
  return (
    <div className="web">
      <div className="list-option">
        <a href="#projects">
          <i class="fas fa-code"></i>
          <span>projects</span>
        </a>
      </div>
      <div className="list-option">
        <a href="#skills">
          <i class="fas fa-tools"></i>
          <span>skills</span>
        </a>
      </div>
      <div className="list-option">
        <a href="#education">
          <i class="fas fa-user-graduate"></i>
          <span>education</span>
        </a>
      </div>
      <div className="list-option">
        <a href="#contact">
          <i class="fas fa-user"></i>
          <span>contact</span>
        </a>
      </div>
    </div>
  );
}

export default Web;
