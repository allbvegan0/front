import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { Card } from "../../molecules/decorative/card";
import { DividerWithText } from "../../molecules/decorative/dividerWithText";
import Logo from "../../molecules/decorative/logo";

import { PostForm } from "../../forms/shop/post";
import withAuth from "../../../helpers/withAuth";

const CreationBox = ({ submitData }) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="2"
      px={{ base: "4", lg: "8" }}
    >
      <Logo />
      <Box maxW="md" mx="auto">
        <Heading
          textAlign="center"
          fontWeight="extrabold"
          display={["none", "flex", "flex", "flex"]}
        >
          Create a post for your account
        </Heading>

        <Card>
          <PostForm submitData={submitData} />
          <DividerWithText mt="6">
            send for publishing or continue with draft
          </DividerWithText>
        </Card>
      </Box>
    </Box>
  );
};

export default withAuth(CreationBox);
