import { fontWork } from "../../utils/font";
import Select from "react-select";
import { useFilterCountries } from "../../hooks/useFilterForm";
import { countriesOptions } from "../../utils/regionOptions";
import { useState, FormEvent } from "react";
interface Props {
  onSetCountry: (country: string) => void;
  region: string;
  styles: string;
  inputStyling: string;
}
const SelectCountry: React.FC<Props> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const { filteredCountries } = useFilterCountries(
    props.region,
    countriesOptions
  );
  const setCountryHandler = (e: FormEvent) => {
    e.preventDefault();
    props.onSetCountry(selectedCountry);
  };
  return (
    <div className={props.styles}>
      <div className={props.inputStyling}>
        <label htmlFor="country" className={fontWork}>
          Country
        </label>
        <Select
          id="country"
          className={fontWork}
          options={filteredCountries}
          onChange={(selectedCountry) =>
            setSelectedCountry(selectedCountry!.value)
          }
        />
      </div>
      <button
        className={fontWork}
        disabled={selectedCountry === "" ? true : false}
        style={
          selectedCountry === ""
            ? { cursor: "not-allowed", backgroundColor: "#f2545ca2" }
            : undefined
        }
        onClick={setCountryHandler}
      >
        Continue
      </button>
    </div>
  );
};
export default SelectCountry;
