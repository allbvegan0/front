import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { Card } from "../../molecules/decorative/card";
import { DividerWithText } from "../../molecules/decorative/dividerWithText";

import RegisterForm from "../../forms/auth/registerForm";

import Providers from "./providers";

import Description from "../../molecules/decorative/description";
import { Link } from "../../molecules/decorative/link";
import { useCheckAuth, useCheckToken } from "../../../hooks/nav";
import RegistrationWelcomeScreen from "../../../pages/screens/registration";

export const Register = () => {
  useCheckAuth()
  useCheckToken()
  const [verificationSent, setWelcome] = React.useState(false)
  const token = window.localStorage.getItem('token')
  
  React.useEffect(()=>{
    let mount=true
    if(mount){
      if(token){
        setWelcome(true)
      }
    }
    return ()=>{
      mount = false
    }

  },[setWelcome, token])

  if(verificationSent){
    return <RegistrationWelcomeScreen/>
  }



  return <Box
    bg={useColorModeValue("gray.50", "inherit")}
    minH="100vh"
    py="8"
    px={{ base: "4", lg: "8" }}
  >
    <Box maxW="md" mx="auto" alignItems="center" justifyItems="center">

      <Description>SignUp to create account</Description>

      <Card>
        <RegisterForm  />
        <Center><Link href="/auth/login">Allready have account: Click here to SignIn</Link></Center>
        <DividerWithText mt="6">or signup with</DividerWithText>
        <Providers />
      </Card>
    </Box>
  </Box>
}
