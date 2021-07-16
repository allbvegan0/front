import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

function Button(props) {
  const { label } = props;
  return (
    <button className={styles.search} style={{ width: "25%" }}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
