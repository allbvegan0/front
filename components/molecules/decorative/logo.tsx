import { Box, Center, Stack, VStack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import { SkeletonCircle } from "@chakra-ui/skeleton";
import React from "react";

const Logo = () => {
  return (
    <>
      <Center>
        <VStack>
          <Image src="/logo_cir.png" w="50%" />
          <Text size="50px">Allßvegan</Text>
        </VStack>
      </Center>
    </>
  );
};

export default Logo;
