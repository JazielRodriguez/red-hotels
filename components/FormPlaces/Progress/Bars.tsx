import styles from "../../../styles/Progress.module.css";
interface Props {
  step: number;
  regionIsSelected?: boolean;
  countryIsSelected?: boolean;
}
const Bars: React.FC<Props> = (props) => {
  if (props.step === 1) {
    return (
      <div
        className={
          props.regionIsSelected
            ? styles["progress-bars-completed"]
            : styles["progress-bars"]
        }
      ></div>
    );
  }
  if (props.step === 2) {
    return (
      <div
        className={
          props.countryIsSelected
            ? styles["progress-bars-completed"]
            : styles["progress-bars"]
        }
      ></div>
    );
  }
  return <div></div>;
};
export default Bars;
