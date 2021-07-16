import React from "react";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";

function Description(props) {
  const { children } = props;
  return (
    <Text
      color="grey"
      fontSize={["sm", "2xl", "3xl"]}
      align="center"
      minWidth="350"
      maxWidth="800"
      wordBreak="revert"
    >
      {children}
    </Text>
  );
}

Description.propTypes = {
  children: PropTypes.string,
};

export default Description;
