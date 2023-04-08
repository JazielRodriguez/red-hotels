import Logo from "./Logo";
import Nav from "./Nav";
import ActionsNav from "./ActionsNav";
import styles from "../styles/Header.module.css";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <Logo />
        <Nav />
        <ActionsNav />
      </div>
    </header>
  );
};
export default Header;
