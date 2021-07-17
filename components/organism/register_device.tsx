import router from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDevice } from "../../services/device";

import Life from "./life";
import Orgasm from "./orgasm";

const Initiate_Front = () => {
  const [d, setD] = useState(null);
  // useEffect(() => {
  //   let mount = true;
  //   if (mount) {
  //     // const device_ =  window.localStorage.getItem("device_id");
  //     const device_ = getDevice()
  //     if (device_) {       
  //       setD(device_);
  //     } else {
  //       router.push('/')
  //     }
  //   }
  //   () => {
  //     return (mount = false);
  //   };
  // }, [setD, d]);

  if (d) {
    return <Life />;
  } else {
    return <Orgasm />;
  }
};

export default Initiate_Front;
