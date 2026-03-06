import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.siteLogo}>
          <Link to="/">TODO APP</Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/regist">할일등록</Link>
          <Link to="/menu2">등록예정</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
