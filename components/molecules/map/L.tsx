// import React, { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
//   useMap,
//   useMapEvent,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-geosearch/dist/geosearch.css";
// import L from "leaflet";

// import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
// import Description from "../decorative/description";

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

// function current_location() {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     console.log("Latitude is ========>:", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//   });
// }

// function MyGet() {
//   const map = useMap();
//   console.log("map center:", map.getCenter());
//   return null;
// }

// function MySet() {
//   const map = useMapEvents({
//     click: () => {
//       map.locate();
//     },
//     locationfound: (location) => {
//       console.log("location found======>:", location);
//     },
//   });
//   return null;
// }

// function MyMapEvent() {
//   const map = useMapEvent("click", () => {
//     console.log(map);
//     map.locate();
//   });
//   return null;
// }

// function AddMarkerToClick(props) {
//   const [marker, setMarkers] = useState({ lat: 28.532547, lng: 77.254298 });

//   const { setInventoryLocation } = props;

//   const map = useMapEvents({
//     click(e) {
//       const newMarker = e.latlng;
//       setMarkers(newMarker);
//       setInventoryLocation({
//         x: newMarker.lat,
//         y: newMarker.lng,
//         address: "",
//         waves: { sin: 0, cos: 0, tan: 2, º: "º" },
//       });
//     },
//   });

//   console.log(map);

//   return (
//     <>
//       <Marker position={marker}>
//         <Popup>Marker is at Lat, Long</Popup>
//       </Marker>
//     </>
//   );
// }

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos: any) {
//   var crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function errors(err: any) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// const Map = (props: any) => {
//   const { x, y, setInventoryLocation, activeStep, previousStep } = props;

//   const [position, setPosition] = useState({
//     lat: 28.532547,
//     lng: 77.254298,
//     zoom: 5,
//   });

//   useEffect(() => {
//     let mount = true;
//     if (mount) {
//       if (x && y) {
//         setPosition({
//           lat: x,
//           lng: y,
//           zoom: 5,
//         });
//       }
//     }
//     return () => {
//       mount = false;
//     };
//   }, [x, y, setPosition]);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.permissions
//         .query({ name: "geolocation" })
//         .then(function (result) {
//           if (result.state === "granted") {
//             console.log(result.state);
//             //If granted then you can directly call your function here

//             navigator.geolocation.getCurrentPosition(success);
//           } else if (result.state === "prompt") {
//             navigator.geolocation.getCurrentPosition(success, errors, options);
//           } else if (result.state === "denied") {
//             //If denied then you have to show instructions to enable location
//           }
//           result.onchange = function () {
//             console.log(result.state);
//           };
//         });
//     } else {
//       alert("Sorry Location Not available!");
//     }
//   }, []);

//   return (
//     <>
//       <Description>
//         Place your Inventory Location.. Use zoom in zoom out or search box.. And
//         mark innventory by clicking location on map..
//       </Description>
//       <MapContainer
//         center={position}
//         zoom={20}
//         scrollWheelZoom={true}
//         style={{ height: "50vh" }}
//       >
//         <MyGet />
//         <MySet />
//         <MyMapEvent />
//         <AddMarkerToClick
//           x={x}
//           y={y}
//           activeStep={activeStep}
//           setInventoryLocation={setInventoryLocation}
//           previousStep={previousStep}
//         />

//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     </>
//   );
// };

const message="look in code"
// ./node_modules/@react-leaflet/core/esm/path.js
// Module parse failed: Unexpected token (10:41)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// |   useEffect(function updatePathOptions() {
// |     if (props.pathOptions !== optionsRef.current) {
// >       const options = props.pathOptions ?? {};
// |       element.instance.setStyle(options);
// |       optionsRef.current = options;


// > Build error occurred
// Error: > Build failed because of webpack errors
//     at /Users/workforfilms/help-india/help-india/front/node_modules/next/dist/build/index.js:17:924
//     at async Span.traceAsyncFn (/Users/workforfilms/help-india/help-india/front/node_modules/next/dist/telemetry/trace/trace.js:6:584)
//     ```

    const Map = ()=>{
      return <h3>{message}</h3>
    }
export default Map;
