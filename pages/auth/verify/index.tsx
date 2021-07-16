import {
  CircularProgress,
  useColorModeValue,
  Input,
  SkeletonCircle,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { EmailSessionForm } from "../../../components/forms/auth/emailOnlyLoginForm";
import { useCheckAuth } from "../../../hooks/nav";

const VerifyI = () => {
  useCheckAuth()

  return (
    <>
      <Box
        maxW={"420px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <CircularProgress />
        <SkeletonCircle />
        <h2>Send Link to Email</h2>
        <EmailSessionForm/>
      </Box>
    </>
  );
};

export default VerifyI;
