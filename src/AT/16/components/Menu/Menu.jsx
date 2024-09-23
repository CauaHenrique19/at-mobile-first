import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Início</li>
        <li className={styles.menuItem}>Categorias</li>
        <li className={styles.menuItem}>Ofertas</li>
        <li className={styles.menuItem}>Contato</li>
      </ul>
    </nav>
  );
};

export default Menu;
