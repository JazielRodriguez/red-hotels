import { fontWork } from "../utils/font";
import styles from '../styles/Logo.module.css'
const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <h2 className={fontWork}>RED</h2>
      <p className={fontWork}>Hotels</p>
    </div>
  );
};
export default Logo;
