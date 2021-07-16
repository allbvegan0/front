import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

function Label(props) {
  const { text } = props;
  return (
    <label className={styles.title}>
      <span>{text}</span>
    </label>
  );
}

Label.propTypes = {
  text: PropTypes.string,
};

export default Label;
