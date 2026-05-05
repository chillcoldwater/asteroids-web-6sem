import { NavLink } from "react-router";
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={styles.header}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <span style={{ font: "2.5em Helvetica" }}>ARMAGGEDON V</span>
        <span>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          земле
        </span>
      </div>
      <div style={{ flex: 1 }}></div>
      <div>
        <NavLink to="/" className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Астероиды</NavLink>
        /
        <NavLink to='/destroyment' className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Уничтожение</NavLink></div>
    </div>
  );
};
