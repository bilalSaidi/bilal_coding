import React, { useState } from "react";
import Mobile from "./mobile/index";
import Web from "./web/index";
import "./header.css";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="header">
      <div className="Logo">Bilal_Coding</div>
      <div className="Menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setisOpen(!isOpen)}>
            <i className="fas fa-bars menu-burger"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
