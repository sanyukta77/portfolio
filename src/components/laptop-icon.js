import PropTypes from "prop-types";
import styles from "./laptop-icon.module.css";

const LaptopIcon = ({ className = "" }) => {
  return (
    <img
      className={[styles.laptopIcon, className].join(" ")}
      alt=""
      src="/laptop.svg"
    />
  );
};

LaptopIcon.propTypes = {
  className: PropTypes.string,
};

export default LaptopIcon;
