interface Props {
  onSetRegion: (region: string) => void;
  styles: string;
  inputStyling: string;
}
import { regionOptions } from "../../utils/regionOptions";
import { fontWork } from "../../utils/font";
import { useState, FormEvent } from "react";
import Select from "react-select";
const SelectRegion: React.FC<Props> = (props) => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const setRegionHandler = (e: FormEvent) => {
    e.preventDefault();
    props.onSetRegion(selectedRegion);
  };
  return (
    <div className={props.styles}>
      <div className={props.inputStyling}>
        <label htmlFor="region" className={fontWork}>
          Select a region
        </label>
        <Select
          id="region"
          className={fontWork}
          options={regionOptions}
          onChange={(regionSelected) =>
            setSelectedRegion(regionSelected!.value)
          }
        />
      </div>
      <button
        className={fontWork}
        disabled={selectedRegion === "" ? true : false}
        style={
          selectedRegion === ""
            ? { cursor: "not-allowed", backgroundColor: "#f2545ca2" }
            : undefined
        }
        onClick={setRegionHandler}
      >
        Continue
      </button>
    </div>
  );
};
export default SelectRegion;
