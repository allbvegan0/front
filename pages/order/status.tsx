import React from "react";
// import { LeafLet } from "../../components/molecules/map/leafLet";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/molecules/map/L"), {
  ssr: false,
});
// import Map from "../../components/molecules/map/L";
function OrderStatus(props) {
  // React.useEffect(function updatePathOptions() {
  //   optionRef == googleMap
  //   if (props.pathOptions !== optionsRef.current) {
  //  const options = props.pathOptions ?? {};
  //   element.instance.setStyle(options);
  //    optionsRef.current = options;}},[])





  return (
    <>
      <Map />
    </>
  );
}

export default OrderStatus;
