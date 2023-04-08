import { useState } from "react";
import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import SelectHotel from "./SelectHotel";
import styles from "../../styles/FormPlaces.module.css";
const FormPlaces: React.FC = () => {
  const [region, setRegion] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [hotel, setHotel] = useState<string>("");
  const [regionIsSelected, setRegionIsSelected] = useState<boolean>(false);
  const [countryIsSelected, setCountryIsSelected] = useState<boolean>(false);
  const selectRegionHandler = (region: string) => {
    setRegion(region);
    setRegionIsSelected(true);
  };
  const selectCountryHandler = (country: string) => {
    setCountry(country);
    setCountryIsSelected(true);
  };
  const selectHotelHandler = (hotel: string) => {
    setHotel(hotel);
  };
  return (
    <form className={styles.form}>
      {!regionIsSelected && (
        <SelectRegion
          onSetRegion={selectRegionHandler}
          styles={styles["input-container"]}
          inputStyling={styles["input-styling"]}
        />
      )}
      {countryIsSelected ||
        (regionIsSelected && (
          <SelectCountry
            onSetCountry={selectCountryHandler}
            region={region}
            styles={styles["input-container"]}
            inputStyling={styles["input-styling"]}
          />
        ))}
      {countryIsSelected && (
        <SelectHotel
          onSetHotel={selectHotelHandler}
          country={country}
          styles={styles["input-container"]}
          inputStyling={styles["input-styling"]}
        />
      )}
    </form>
  );
};
export default FormPlaces;
