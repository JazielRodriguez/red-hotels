import { useState } from "react";
import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import SelectHotel from "./SelectHotel";
import styles from "../../styles/FormPlaces.module.css";
interface Props {
  regionIsSelected: boolean;
  countryIsSelected: boolean;
  onSetRegionIsSelected: (value: boolean) => void;
  onSetCountryIsSelected: (value: boolean) => void;
}
const FormPlaces: React.FC<Props> = (props) => {
  const [region, setRegion] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [hotel, setHotel] = useState<string>("");

  const selectRegionHandler = (region: string) => {
    setRegion(region);
    props.onSetRegionIsSelected(true);
  };
  const selectCountryHandler = (country: string) => {
    setCountry(country);
    props.onSetCountryIsSelected(true);
  };
  const selectHotelHandler = (hotel: string) => {
    setHotel(hotel);
  };
  return (
    <form className={styles.form}>
      {!props.regionIsSelected && (
        <SelectRegion
          onSetRegion={selectRegionHandler}
          styles={styles["input-container"]}
          inputStyling={styles["input-styling"]}
        />
      )}
      {props.countryIsSelected ||
        (props.regionIsSelected && (
          <SelectCountry
            onSetCountry={selectCountryHandler}
            region={region}
            styles={styles["input-container"]}
            inputStyling={styles["input-styling"]}
          />
        ))}
      {props.countryIsSelected && (
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
