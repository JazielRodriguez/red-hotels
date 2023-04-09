import { NextPage } from "next";
import { fontWork } from "../utils/font";
import Link from "next/link";
import styles from "../styles/404.module.css";
const Custom404: NextPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.message}>
        <p className={`${fontWork} ${styles.status}`}>404</p>
        <h2 className={fontWork}>An error ocurred</h2>
        <p className={fontWork}>This page does{"'nt"} exist</p>
        <Link href="/" className={`${fontWork} ${styles.link}`}>
          Get back to home page
        </Link>
      </div>
      <div className={styles.logo}>
        <div>
          <h1 className={fontWork}>RED</h1>
          <p className={fontWork}>HOTELS</p>
        </div>
      </div>
    </div>
  );
};
export default Custom404;
