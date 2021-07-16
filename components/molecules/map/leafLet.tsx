import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import styles from "../../../styles/Home.module.css";
import { Button, Stack } from "@chakra-ui/react";

const LeafLet = () => {
  const [longitude, setLong] = useState();
  const [latitude, setLat] = useState();
  const defaultLatLng: LatLngTuple = [51.505, -0.093];
  const zoom: number = 8;
  const position: LatLngTuple = [51.505, -0.09];
  const findLocation = async () => {
    return await navigator.geolocation.getCurrentPosition(function (position) {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log(long, lat);

      const c_p = { long, lat };

      console.log(c_p);
      return c_p;
    });
    // return ll;
  };

  useEffect(() => {
    let mount = true;
    if (mount) {
      const latLong = findLocation().then((data) => {
        console.log(data);
      });
      console.log(latLong);

      // setLong(latLong.long)
      // setLat(lat)
    }
    return () => {
      mount = false;
    };
  }, [findLocation]);

  return (
    <>
      <Stack>
        <Button onClick={findLocation}>Find Location</Button>
        <MapContainer
          id="mapId"
          center={position}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Stack>
    </>
  );
};

export default LeafLet;
