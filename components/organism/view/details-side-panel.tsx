import { Box, Grid, HStack, Stack, VStack } from "@chakra-ui/react";

import React, { Suspense } from "react";

import ListPanel from "./list-panel";
import PropTypes from "prop-types";

const SidePanel = (props) => {
  return (
    <>
      <ListPanel props={props.props.props.props} />
    </>
  );
};

SidePanel.propTypes = {
  props: PropTypes.object.isRequired,
  setDr: PropTypes.func,
};

export default SidePanel;
