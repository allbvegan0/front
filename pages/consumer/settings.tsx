import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import withAuth from "../../helpers/withAuth";

function ConsumerSettings() {
  return (
    <>
    <Box     maxW={"420px"}
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"lg"}
    p={2}
    textAlign={"center"} >

      <Stack align="center" background="grey" color="red">
        <Text color="white">ConsumerSettings</Text>
        <h3 color="red">Show only after login</h3>
      </Stack>
    </Box>
    </>
  );
}

export default withAuth(ConsumerSettings);
