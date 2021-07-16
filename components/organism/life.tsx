import React, { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { VisuallyHidden } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { handleGetDevice } from "../../redux/thunk/device";
import { commonActions } from "../../redux/slices/common";

const Life = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const message = "Welcome to AllbVegan! Auth Device. Success...";
    let mount = true;
    if (mount) {
      dispatch(handleGetDevice({}));
    }
    return () => {
      mount = false;
    };
  }, []);

  return (
    <Box m="0">
      <VisuallyHidden>/* Welcome device */</VisuallyHidden>
    </Box>
  );
};

export default Life;
