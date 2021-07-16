// import { gql } from "@apollo/client";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue,  createIcon, HStack } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ViewOption from "../../../components/organism/view/view-option-tab";
import {  useUserAddresses } from "../../../hooks/nav";

import { handleDeleteUserAddress, handleGetUserAddresses } from "../../../redux/thunk/user";



export const UpDownIcon = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 200 200",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
})
 const UserAddresesCard = (props) => {
  console.log('props in address',props)

  const{ me:{user:me}, addresses:_addresses, getUserAddresses, deleteUserAddress} = props
  const dispatch = useDispatch()

  console.log('display addresses==>',_addresses)
  useEffect(()=>{
    // getUserAddresses({email: me.email})
    dispatch(handleGetUserAddresses({email: me.email}))
  },[me.email])



const deleteAddress = (address)=>{
  console.log('--===--->start delete request', address)
  dispatch(handleDeleteUserAddress({street_address: address.street_address, zipcode: address.zipcode}))
}


console.log('--=--<',_addresses)
    return (
      <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={2}
      textAlign={"center"}
      >
      <h2
        style={{
          fontFamily: "sans-serif",
          fontSize: "29",
          fontWeight: "bold",
        }}
        >
        Addresses
      </h2>
      {_addresses
        // .filter((address) => address.type === "billing")
        .map((address, index) => {
          return (
            <div key={index}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                >
                  <HStack>
                  <ViewOption />

                  <UpDownIcon/>
                {/* <Radio p={2}> */}
                  <h2>{address.street_address},{address.city},{address.country}</h2>
                {/* </Radio> */}
                <DeleteIcon m={4} onClick={()=>{
                  deleteAddress(address)
                }}/>
                </HStack>
              </Box>
              <br/>
            </div>
          );
        })}
    </Box>
  );
};
// }


export default UserAddresesCard