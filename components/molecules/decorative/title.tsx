import React from "react";
import PropTypes from "prop-types";
import { Link, Text } from "@chakra-ui/react";

function Title(props) {
  const { children, link } = props;
  return (
    <Link href={link}>
      <Text
        color="green"
        fontSize={["2xl", "6xl", "8xl", "8xl"]}
        align="center"
      >
        {children}
      </Text>
    </Link>
  );
}

Title.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
};

export default Title;
