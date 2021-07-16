import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { Card } from "../../molecules/decorative/card";
import { DividerWithText } from "../../molecules/decorative/dividerWithText";
import { Link } from "../../molecules/decorative/link";
import { LoginForm } from "../../forms/auth/loginForm";
import Logo from "../../molecules/decorative/logo";

import { useSession } from "next-auth/client";
import Providers from "./providers";
import { useRouter } from "next/router";
import Description from "../../molecules/decorative/description";
import { AppState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useCheckAuth } from "../../../hooks/nav";



export const Login = () => {

  useCheckAuth()

    return (
      <Box

        minH="100vh"
        py="2"
        px={{ base: "4", lg: "8" }}
      >
        <Logo />
        <Box maxW="md" mx="auto">
          <Description
       
          >
            Sign in to your account
          </Description>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link href="/auth/register">Create account now</Link>
          </Text>
          <Card>
            <LoginForm />
            <DividerWithText mt="6">or continue with</DividerWithText>
            <Providers />
          </Card>
        </Box>
      </Box>
    );
};
