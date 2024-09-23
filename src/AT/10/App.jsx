import { useState } from "react";

import ProfileIcon from "./profile-icon.png";
import IconMenu from "./icon-menu.png";

import "./App.css";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menu-container">
      <div className={`menu ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="menu-header">
          <img src={IconMenu} className="toggle-button" onClick={toggleMenu} />
          <span className="brand">Plataforma</span>
          <div className="menu-options">
            <a href="#option1">Opção 1</a>
            <a href="#option2">Opção 2</a>
            <a href="#option3">Opção 3</a>
          </div>
          <img src={ProfileIcon} className="profile-icon" />
        </div>
      </div>
    </div>
  );
};

export default App;
