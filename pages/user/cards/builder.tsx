import {Box, VStack, useColorModeValue, Stack, Radio, RadioGroup, Link, Badge, Button} from "@chakra-ui/react"
import { NoUnusedVariablesRule } from "graphql";
import { useRouter } from "next/router";
import React from "react"
import { useDispatch } from "react-redux";
import AddressPop from "../../../components/molecules/pops/address";

import ProfilePicture from "../../../components/molecules/pops/ProfilePicture";
import { handleSignOut } from "../../../redux/thunk/auth";


const user = {
  name: "change is James",
  email: "@l_h_k_d_s",
  image: "",
  tag: "consumer",
  description:
    "Message from system: Conngratulations!! verify yor link by clicking on link sent_to email ",
  role: ["Customer", "Admin", "Shopkeeper"],
  intesests: ["skin", "face", "hair-fall"],
  bio: "",
};


const UserBuilderCard = (props)=>{
  const dispatch = useDispatch()
  const router = useRouter()

  const signOut = () => {
    dispatch(handleSignOut({}));
    router.push("/");
  };
  console.log('@ props inn builder',props)

  const{user:me} = props
  
  return(

    <Box
    maxW={"320px"}
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"lg"}
    p={6}
    textAlign={"center"}
  >
    <VStack>
      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          {me.emailVerified ? (
            <Radio colorScheme="green" value="1">
              Verified
            </Radio>
          ) : (
            <Radio colorScheme="red" value="1">
              Non-Verified
            </Radio>
          )}
        </Stack>
      </RadioGroup>

      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          {me.image ? (
            <Radio colorScheme="green" value="1">
              Profiled
            </Radio>
          ) : (
            <Radio colorScheme="red" value="1">
              Non-Profiled
            </Radio>
          )}
          {/* <Radio>ProfilComplete</Radio> */}
        </Stack>
      </RadioGroup>
      <RadioGroup defaultValue="1">
        <Stack spacing={5} direction="row">
          {me.role==="Shopkeeper" ? (
            <Radio colorScheme="green" value="1">
              Lab Master
            </Radio>
          ) : (
            <Radio colorScheme="blue" value="1">
              {me.role}
            </Radio>
          )}
          {/* <Radio>ProfilComplete</Radio> */}
        </Stack>
      </RadioGroup>
      {/* </Box> */}
    </VStack>
    {/* </Center> */}
    <Link href={"#"} color={"blue.400"}>
      #{me.tag ? me.tag : "GUEST"}
      <br />
      #wishlist
    </Link>{" "}
    {/* </Text> */}
    <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
      <Badge
        px={2}
        py={1}
        bg={useColorModeValue("gray.50", "gray.800")}
        fontWeight={"400"}
      >
        #{user.intesests[0]}
      </Badge>
      <Badge
        px={2}
        py={1}
        bg={useColorModeValue("gray.50", "gray.800")}
        fontWeight={"400"}
      >
        #{user.intesests[1]}
      </Badge>
      <Badge
        px={2}
        py={1}
        bg={useColorModeValue("gray.50", "gray.800")}
        fontWeight={"400"}
      >
        #{user.intesests[2]}
      </Badge>
    </Stack>
    <Stack mt={8} direction={"row"} spacing={4}>
      <ProfilePicture user={me} />

      <AddressPop user={me} />
    </Stack>
    <Stack mt={8} direction={"row"} spacing={4}>
      <Button
        disabled={!!!me.emailVerified}
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        _focus={{
          bg: "orange.200",
        }}
      >
        {`<< Shop History`}
      </Button>
      <Button
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        bg={"pink.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "red.500",
        }}
        _focus={{
          bg: "red.200",
        }}
        onClick={() => signOut()}
      >
        SignOutº
      </Button>
    </Stack>
  </Box>
  )
}

export default UserBuilderCard
