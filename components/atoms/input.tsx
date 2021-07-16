import styles from "../../styles/Home.module.css";
import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      className={styles.search}
      style={{ width: "60%" }}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
export default Input;
