import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { Card } from "../../molecules/decorative/card";

import Logo from "../../molecules/decorative/logo";

import { ResetPasswordForm } from "../../forms/auth/resetPasswordFrom";
import { useCheckAuth } from "../../../hooks/nav";


export const ResetPassword = () => {
  useCheckAuth()
  return <Box
    bg={useColorModeValue("gray.50", "inherit")}
    minH="100vh"
    py="12"
    px={{ base: "4", lg: "8" }}
  >
    <Box maxW="md" mx="auto">
      <Logo />
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Reset Password
      </Heading>

      <Card>
        <ResetPasswordForm />
      </Card>
    </Box>
  </Box>
};
