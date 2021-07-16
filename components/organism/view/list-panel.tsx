import {
  Box,
  Skeleton,
  HStack,
  SkeletonCircle,
  Text,
  Avatar,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import DetailPanel from "./details-panel";
import Draft from "../../../pages/admin/create-board";

const NoteCreator = () => {
  return <Draft />;
};

const ListPanel = (props) => {
  const [dr, setDr] = React.useState({
    title: "Title",
    content: "content",
    author: {
      name: "hem",
    },
  });
  const handleDraftSelect = (d) => {
    setDr(d);
  };
  return (
    <>
      <HStack bg="fuchsia">
        <VStack h="90%" justify="start">
          <Box h="50%" w="100%">
            <NoteCreator />
          </Box>
          <Box w="100%">
            <Skeleton padding="1px" h="60px" w="100%" shadow="xs" />
          </Box>
          <Box bg="yellow" h="80%" w="100%">
            {props.props.draft.map((d, index) => {
              return (
                <Box
                  key={index}
                  m={2}
                  shadow="2xl"
                  marginBottom="1"
                  bg="greenyellow"
                  onClick={() => {
                    handleDraftSelect(d);
                  }}
                >
                  <Text fontWeight="bold">{d.title}</Text>
                  <HStack>
                    <SkeletonCircle m={1} />
                    <Avatar
                      m={1}
                      size="sm"
                      shadow="2xl"
                      src={props.props.session.user.image}
                    />

                    <Text height="25px" w="50%" noOfLines={1}>
                      {d.author.name}
                    </Text>
                    <Skeleton height="10px" w="20%"></Skeleton>
                    <Skeleton height="20px"></Skeleton>
                    <Skeleton height="20px"></Skeleton>
                  </HStack>
                </Box>
              );
            })}
          </Box>
        </VStack>

        <DetailPanel draft={dr} />
      </HStack>
    </>
  );
};

export default ListPanel;
