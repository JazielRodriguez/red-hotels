import { fontWork } from "../utils/font";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link className={fontWork} href="/hotels">
        Hotels
      </Link>
      <Link className={fontWork} href="/events">
        Events
      </Link>
      <Link className={fontWork} href="/gallery">
        Gallery
      </Link>
      <Link className={fontWork} href="/about-us">
        About us
      </Link>
    </nav>
  );
};
export default Nav;
