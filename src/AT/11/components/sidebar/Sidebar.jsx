import IconMenu from "../../icon-menu.png";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  return (
    <div className={isExpanded ? styles.expanded : styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
          <img src={IconMenu} className={styles.icon} />
        </button>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          <li>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" className={styles.navLink}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
