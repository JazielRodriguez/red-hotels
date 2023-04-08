interface Props {
  onSetHotel: (hotel: string) => void;
  country: string;
  styles: string;
  inputStyling: string;
}
import Select from "react-select";
import { fontWork } from "../../utils/font";
import { useFilterHotels } from "../../hooks/useFilterForm";
import { hotelsOptions } from "../../utils/regionOptions";
import { useState } from "react";
const SelectHotel: React.FC<Props> = (props) => {
  const [selectedHotel, setSelectedHotel] = useState<string>("");
  const { filteredHotels } = useFilterHotels(props.country, hotelsOptions);
  return (
    <div className={props.styles}>
      <div className={props.inputStyling}>
        <label htmlFor="hotel" className={fontWork}>
          Hotel{"(s)"}
        </label>
        <Select id="hotel" className={fontWork} options={filteredHotels} />
      </div>
      <button
        className={fontWork}
        disabled={selectedHotel === "" ? true : false}
        style={
          selectedHotel === ""
            ? { cursor: "not-allowed", background: "#f2545ca2" }
            : undefined
        }
      >
        More info
      </button>
    </div>
  );
};
export default SelectHotel;
