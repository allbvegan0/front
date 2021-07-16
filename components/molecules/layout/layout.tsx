import { Box } from "@chakra-ui/layout";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import SideBar from "./sidebar";
import TopBar from "./topbar";

const Layout = ({ children }) => {
  return (
    <Flex direction={"column"}>
      <TopBar />
      <HStack>
        {/* <VStack> */}
        <SideBar />
        <ToastContainer style={{ minHeight: 50 }} autoClose={4000}/>
        <Box>{children}</Box>
        {/* </VStack> */}
      </HStack>
      <br/>
      <br/>
      <br/>
      <br/>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
