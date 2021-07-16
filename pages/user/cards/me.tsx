import React from "react"
import {Box, Text, Heading, Center, useColorModeValue} from "@chakra-ui/react"
import QRCode from "qrcode.react";
import { _Avatar } from "../../../components/atoms/avatar";

const messages = [
  "Message from system: Conngratulations!! verify yor link by clicking on link sent_to email ",
  "Congratulation! You are verified. Complete you profile by adding picture and address",
  "You are successfully profiled. Continue by adding a wishlist allbLabs will find best solutions for you.",
];

const MeCard = (me) =>{
  return (
    <Box
    maxW={"320px"}
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"lg"}
    p={6}
    textAlign={"center"}
  >
    <_Avatar />
    <Heading fontSize={"2xl"} fontFamily={"body"}>
      {me.name}
    </Heading>
    <Text fontWeight={600} color={"gray.500"} mb={4}>
      {me.email}
    </Text>
    <Center>
      <QRCode size={200} value={"allb"} />
    </Center>
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.700", "gray.400")}
      px={3}
    >
      {me.email}
      <br />
      {"TASK: "}
      {/* {me.emailVerified?messages[1]:messages[0]}  */}
      {me.image ? messages[2] : messages[1]}
    </Text>
    <br />
  </Box>
  )
}

export default MeCard