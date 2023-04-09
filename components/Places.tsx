import { fontWork } from "../utils/font";
import { useState } from "react";
import styles from "../styles/Places.module.css";
import FormPlaces from "./FormPlaces/FormPlaces";
import Progress from "./FormPlaces/Progress";
const Places: React.FC = () => {
  const [regionIsSelected, setRegionIsSelected] = useState<boolean>(false);
  const [countryIsSelected, setCountryIsSelected] = useState<boolean>(false);
  return (
    <div className={styles.places}>
      <h2 className={fontWork}>Our best hotels</h2>
      <Progress
        regionIsSelected={regionIsSelected}
        countryIsSelected={countryIsSelected}
      />
      <FormPlaces
        regionIsSelected={regionIsSelected}
        countryIsSelected={countryIsSelected}
        onSetRegionIsSelected={setRegionIsSelected}
        onSetCountryIsSelected={setCountryIsSelected}
      />
    </div>
  );
};
export default Places;
