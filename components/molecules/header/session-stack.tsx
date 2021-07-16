import { Button, Menu, MenuButton, Stack } from "@chakra-ui/react";
import React from "react";
import PopList from "../pops/menuList";
import { isToken, useDevice, useSession,  __useUser } from "../../../hooks/nav";
import { __Avatar } from "../../atoms/avatar";
import { AppState } from "../../../redux/store";
import { connect, ConnectedProps } from "react-redux";
// import { isToken } from "typescript";


export const NonSessionStack = (device) => {
  // console.log("using ", device);
  
  const _isToken = isToken();
  // const isAccessToken = window.localStorage.getItem("accessToken")
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      {!_isToken ? (
        <Button
          as={"a"}
          // display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"pink.400"}
          href={"/auth/login"}
          _hover={{
            bg: "pink.300",
          }}
        >
          LOGIN
        </Button>
      ) : (
        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={400}
          variant={"link"}
          href={"/auth/register"}
        >
          REGISTER
        </Button>
      )}
    </Stack>
  );
};

export const SessionStack = (session) => {
  // var src =''
  // console.log('in sessionn stack',session)

 
  if (session) {
    return (
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        spacing={6}
      >
        <Menu >
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            style={{margin:0}}
          >
            <__Avatar user={session.session}
            />
          </MenuButton>
          <PopList user={session.session} />
        </Menu>
      </Stack>
    );
  }
};


const SessionHeader = (props) => {

  const {me:{user}, shop} = props

  const device_state = useDevice();


  if (user && user.name) {
    return (
      <div>
        <SessionStack session={user} />
      </div>
    );
  } else {
    return (
      <div>
        <NonSessionStack deviceStatus={device_state} />
      </div>
    );
  }
};



export default SessionHeader
