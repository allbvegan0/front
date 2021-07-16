import { Box, HStack, SkeletonCircle } from "@chakra-ui/react";
import React, { useState } from "react";

const ViewOption = () => {
  const [exp, toggleExp] = useState(false);

  return (
    <Box
      color={"black"}
      bg="gray.100"
      w={["50%", "75%", "100%"]}
      h={["20", "20", "20"]}
      m="1"
    >
      <HStack w={["50%", "75%", "100%"]}>
        {!exp ? (
          <Box onClick={() => toggleExp(true)}>
            <SkeletonCircle size="20" />
          </Box>
        ) : (
          <Box
            color={"black"}
            bg="gray.100"
            w="100%"
            h={["20", "20", "20"]}
            m="1"
          >
            <HStack>
              <SkeletonCircle size="20" />
              <SkeletonCircle size="20" />
              <SkeletonCircle size="20" />
              <SkeletonCircle size="20" />
              <SkeletonCircle size="20" />
              <Box onClick={() => toggleExp(false)}>
                <SkeletonCircle size="20" />
              </Box>
            </HStack>
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default ViewOption;
