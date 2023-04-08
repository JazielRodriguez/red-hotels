import { fontWork } from "../utils/font";
import styles from "../styles/Places.module.css";
import FormPlaces from "./FormPlaces/FormPlaces";
const Places: React.FC = () => {
  return (
    <div className={styles.places}>
      <h2 className={fontWork}>Our best hotels</h2>
      <FormPlaces />
    </div>
  );
};
export default Places;
