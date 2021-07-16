import { gql, useQuery } from "@apollo/client";
import { Box, HStack } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Description from "../../components/molecules/decorative/description";
import styles from "../../styles/Home.module.css";

// export const getServerSideProps: GetServerSideProps = async ( ) => {

//   const _devices = await fetch(`http://localhost:4000/devices`)
//   const devices = await _devices.json()
//   console.log('devices---->', devices)
//   return {
//     props: {devices}
//   };
// };

const GET_DEVICES = gql`
  query getDevices{
    devices{
      id
      device_id
      created_at
      DeviceStatus
    }
  }
`



function Network(props) {
  const {data, loading, error} = useQuery(GET_DEVICES)
  if(loading){

    return <>loading..</>
  }
  if(error){
    return <>Error: {error}</>
  }

  const {
    devices
  } = data;
  return (
    <>
      <Head>
        <title>ållßvegan</title>
      </Head>
      <Description>Return Device Network Interface</Description>
      <ul className={styles.container}>
        {devices.map((device) => (
          <li key={device.id}>
            {/* <Box> */}
            <HStack>
            <Box p={5} shadow="md" borderWidth="1px" >
            <h2>{device.id}</h2>
            <p style={{ background: "purple", color: "wheat" }}>
              {device.device_id}
            </p>
            {device.os_type}-{device.created_at}
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" >
              {
                device.DeviceStatus==="REGISTERED"?<Box bg="green">{device.DeviceStatus}</Box>:<Box bg="red">{device.DeviceStatus}</Box>
              }
              
            </Box>
            </HStack>
          </li>
        ))}
      </ul>
    </>
  );
}



export default Network;
