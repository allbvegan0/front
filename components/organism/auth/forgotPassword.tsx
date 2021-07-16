import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { Card } from "../../molecules/decorative/card";

import Logo from "../../molecules/decorative/logo";

import { ForgotPasswordForm } from "../../forms/auth/forgotPasswordFrom";

export const ForgotPassword = () => (
  <Box
    bg={useColorModeValue("gray.50", "inherit")}
    minH="100vh"
    py="12"
    px={{ base: "4", lg: "8" }}
  >
    <Box maxW="md" mx="auto">
      <Logo />
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Send reset link
      </Heading>

      <Card>
        <ForgotPasswordForm />
      </Card>
    </Box>
  </Box>
);
