import { fontWork } from "../../../utils/font";
import styles from "../../../styles/Progress.module.css";
interface Props {
  step: number;
  regionIsSelected?: boolean;
  countryIsSelected?: boolean;
}
const Steps: React.FC<Props> = (props) => {
  if (props.step === 1) {
    return (
      <div className={styles["progress-steps-completed"]}>
        <p className={fontWork}>{props.step}</p>
      </div>
    );
  }
  if (props.step === 2) {
    return (
      <div
        className={
          props.regionIsSelected
            ? styles["progress-steps-completed"]
            : styles["progress-steps"]
        }
      >
        <p className={fontWork}>{props.step}</p>
      </div>
    );
  }
  if (props.step === 3) {
    return (
      <div
        className={
          props.countryIsSelected
            ? styles["progress-steps-completed"]
            : styles["progress-steps"]
        }
      >
        <p className={fontWork}>{props.step}</p>
      </div>
    );
  }
  return <p></p>;
};
export default Steps;
