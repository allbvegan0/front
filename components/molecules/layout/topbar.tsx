import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import React from "react";
import { DesktopNav } from "../header/desktop";
import { MobileNav } from "../header/mobile";
import SessionHeader  from "../header/session-stack";
import { DarkModeSwitch } from "../../DarkModeSwitch";
import { AppState } from "../../../redux/store";
import { connect, ConnectedProps } from "react-redux";

function TopBar(props:Props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box marginBottom={"2px"} paddingBottom={"10px"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            size={"lg"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            ållßvegan
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <VStack>
              <DesktopNav {...props}/>
            </VStack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <HStack off={6}>
            {/* <DarkModeSwitch /> */}
            {/* <HiOutlineIdentification /> */}

            <SessionHeader {...props}/>
          </HStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav {...props}/>
      </Collapse>
    </Box>
  );
}

const mapState = (state: AppState) => ({
  me: state.auth.auth.data,
  currentUser: state.user.user.data,
  shop: state.shop.Shop.data,
});

const connector = connect(mapState, null);
type PropFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropFromRedux {
  currentUser: any;
  shop: any;
  me: any;
}

export default connector(TopBar)
