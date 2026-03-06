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
          <Link to="/regist">등록하기</Link>
          <Link to="/menu2">메뉴2</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
