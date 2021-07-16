import { Avatar, Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import faker from "faker";

const imgSrc = faker.image.nature();
const imgSrc1 = faker.image.people();

const DetailPanel = ({ draft }) => {
  console.log("==-=>", draft);
  const { title, content, author } = draft;
  console.log("res-->", content);
  return (
    <>
      <Box h="100vh" w="100%" bg="white" padding="10px">
        <Image src={imgSrc} w="100%" h="30vh" />
        <Box padding="6" boxShadow="lg" bg="white">
          <HStack>
            <Avatar src={imgSrc1} />
            <Text>created by: {author.name}</Text>
          </HStack>

          <Box h="12%">
            <Heading>{title}</Heading>
          </Box>
          {/* <Box h="50px" w="100%" m={2}></Box> */}
          <Box h="50%" w="100%" m={2} bg="white">
            <Text fontSize="2xl" bg="white">
              {content}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetailPanel;
