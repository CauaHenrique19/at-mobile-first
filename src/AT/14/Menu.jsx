import { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.menu}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
        <li>Início</li>
        <li>Top Tópicos</li>
        <li>Discussões Recentes</li>
        <li>Meus Tópicos</li>
        <li>Configurações</li>
      </ul>
    </nav>
  );
};

export default Menu;
