import React from "react";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";

function Message(props) {
  const { children, link } = props;
  return (
    <Text color="grey" fontSize={["3xl", "4xl", "6xl", "6xl"]} align="center">
      {children}
    </Text>
  );
}

Message.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
};

export default Message;
