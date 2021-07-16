// import { number, object, string } from "prop-types";
// import React, { Component } from "react";
// import QrReader from "react-qr-scanner";
// import PropTypes from "prop-types";
// import { useState } from "react";

// const scanState = {
//   delay: number,
//   result: string,
// };
// const LegacyModeExample = (props) => {
//   const [C, setC] = useState(false);
//   // let _window = window;
//   React.useEffect(() => {
//     let mount = true;
//     if (mount) {
//       if (!!typeof window && window.document !== undefined) {
//         var c = window.document;
//         console.log(window.document);
//         setC(false);
//         // console.log(C);
//       }
//     }
//     return () => {
//       mount: false;
//     };
//   }, []);
//   // scan change
//   // spelling mistake removed
//   // observe next repeats handle
//   // bharti
//   // bharat
//   // bhArata
//   //
//   console.log(QrReader);
//   const onError = () => {
//     console.log("Error Found");
//   };
//   const onScan = () => {
//     console.log("Scan Found");
//   };
//   const openImageDialog = () => {
//     alert("open to scan");
//   };
//   return (
//     <React.Fragment>
//       <h2>Scanner qr</h2>
//       <button onClick={() => setC(!C)}>{C ? "Switch Off" : "Switch On"}</button>
//       {C ? (
//         <QrReader
//           // delay={props.delay}
//           style={{
//             innerHeight: "300px",
//           }}
//           resolution={4000}
//           onError={() => onError}
//           onScan={onScan}
//           orientation={1}
//         />
//       ) : (
//         <h3>undefined bhArata</h3>
//       )}
//       <input type="button" value="Submit QR Code" onClick={openImageDialog} />
//       <p>{props.result}</p>
//     </React.Fragment>
//   );
// };

const message = "This is a legacy mode Activate with Install From Code" 
const LegacyModeExample = ()=>{
return <h3>{message}</h3>
}

export default LegacyModeExample;
