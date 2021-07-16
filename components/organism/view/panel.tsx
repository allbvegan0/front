import React from "react";
import PropTypes from "prop-types";

import { Box } from "@chakra-ui/react";

import SidePanel from "./details-side-panel";
import ViewOption from "./view-option-tab";

const Panel = (props) => {
  console.log("panel_props", props);
  return (
    <Box>
      <ViewOption />
      <SidePanel props={props} />
    </Box>
  );
};

Panel.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Panel;
