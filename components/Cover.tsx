import { fontWork } from "../utils/font";
import cover from "../public/cover.jpg";
import Image from "next/image";
import styles from "../styles/Cover.module.css";
import Places from "./Places";
const Cover: React.FC = () => {
  return (
    <div className={styles.cover}>
      <div className={styles["cover-img-container"]}>
        <Image
          src={cover}
          alt="Red Hotels - A Jaziel Rodriguez Project"
          fill={true}
        />
        <div className={styles["cover-content-container"]}>
          <div className={styles["cover-content"]}>
            <div className={styles['cover-content-description']}>
              <p className={fontWork}>LUXURY ROOMS AND SUITES</p>
              <h1 className={fontWork}>WELCOME</h1>
              <p className={fontWork}>RED HOTELS AROUND THE WORLD</p>
            </div>
            <div>
              <Places />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cover;
