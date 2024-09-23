import { useState } from "react";

import Sidebar from "../sidebar/Sidebar";

import IconMenu from "../../icon-menu.png";
import styles from "./GlobalMenu.module.css";

function GlobalMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.menu}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        <img src={IconMenu} className={styles.icon} />
      </button>
      Global Menu
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default GlobalMenu;
