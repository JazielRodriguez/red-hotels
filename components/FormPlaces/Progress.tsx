import { fontWork } from "../../utils/font";
import styles from "../../styles/Progress.module.css";
import Bars from "./Progress/Bars";
import Steps from "./Progress/Steps";
interface Props {
  regionIsSelected: boolean;
  countryIsSelected: boolean;
}
const Progress: React.FC<Props> = (props) => {
  return (
    <div className={styles.progress}>
      <Steps step={1} />
      <Bars step={1} regionIsSelected={props.regionIsSelected} />
      <Steps step={2} regionIsSelected={props.regionIsSelected} />
      <Bars step={2} countryIsSelected={props.countryIsSelected} />
      <Steps step={3} countryIsSelected={props.countryIsSelected} />
    </div>
  );
};
export default Progress;
