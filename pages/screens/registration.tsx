import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Description from "../../components/molecules/decorative/description";
import { Link } from "../../components/molecules/decorative/link";



const message = [
  {
    context:"`Congratulation!`",
    message:"Click on the link sent to your email to verify your registration.",
    supportAction: "Click Here to resend verification"
}
]

const RegistrationWelcomeScreen = () => {

  // const email = user.email

  return (
    <>
      <Box     maxW={"420px"}
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"lg"}
    p={2}
    textAlign={"center"}>
        <h2>{message[0].context}</h2>
        <Description>
          {message[0].message}
        </Description>

        <Stack align="center">
          <Link href={`/auth/verify/?email=${"email"}`} textAlign="center">
            {message[0].supportAction}
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default RegistrationWelcomeScreen;
