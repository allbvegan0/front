import React from "react";

import { Register } from "../../components/organism/auth/register";
import { withDevice } from "../../helpers/withAuth";

function RegisterScreen() {
  return (
    <>
      <Register />
    </>
  );
}

export default withDevice(RegisterScreen);
