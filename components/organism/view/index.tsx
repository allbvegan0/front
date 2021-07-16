import React from "react";

import Panel from "./panel";
import PropTypes from "prop-types";

const View = (props: any) => {
  return <Panel props={props} />;
};

View.propTypes = {
  props: PropTypes.object.isRequired,
};

export default View;
