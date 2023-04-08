import { fontWork } from "../utils/font";
import Link from "next/link";
import styles from "../styles/ActionsNav.module.css";
const ActionsNav: React.FC = () => {
  return (
    <div className={styles["actions-nav"]}>
      <Link
        className={`${fontWork} ${styles["action-nav-book-link"]}`}
        href="/booking"
      >
        Book Now
      </Link>
      <button className={fontWork}>ENG</button>
    </div>
  );
};
export default ActionsNav;
