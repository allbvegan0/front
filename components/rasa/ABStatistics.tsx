import { AddIcon, AtSignIcon, DragHandleIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Box, chakra, createIcon, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
// import { FaRegPlusSquare } from "react-icons/fa";
// import { BsPerson } from "react-icons/bs";
// import { FaBlog, FaShopify, FaShopware } from "react-icons/fa";
// import { FiServer } from "react-icons/fi";
// import { GoLocation } from "react-icons/go";


// import {
//   MdScanner,
//   MdPayment,
//   MdDrafts,
//   MdHourglassEmpty,
// } from "react-icons/md";
import { StatsCard } from "./SCard";

export const UpDownIcon = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 200 200",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="orange"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
})
// api apa kauNapa
// rest api
// graphql
// feed upon /* aåAA'i' */
// organism /* m_other */
// context /* n_ether */
// Authorization /* accessToken */
export function AdminBasicStatistics(props) {
  console.log(props);
  // const {
  //   props: { post_count, draft_count, blog_count, user_count },
  // } = props;
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <Link href={"/network"}>
          <StatsCard
            title={"DEVICES"}
            stat={props.props.device_count?props.props.device_count:0}
            icon={<DragHandleIcon size={"3em"} />}
          />
        </Link>
        <Link href={"/admin/create-board"}>
          <StatsCard
            title={"POST"}
            stat={"CREATE"}
            icon={<AddIcon size={"3em"} />}
          />
        </Link>
        <Link href={"/admin/drafts"}>
          <StatsCard
            title={"Drafts"}
            stat={props.props.draft_count?props.props.draft_count:0}
            icon={<AtSignIcon size={"3em"} />}
          />
        </Link>
        <Link href={"/admin/posts"}>
          <StatsCard
            title={"Created Posts"}
            stat={props.props.posts_count?props.props.posts_count:0}
            // icon={<FaRegPlusSquare size={"3em"} />}
            icon={<PlusSquareIcon color="blue" size={"3em"} />}

          />
        </Link>
        <Link href={"#"}>
          <StatsCard
            title={"Authors"}
            stat={props.props.user_count?props.props.user_count:0}
            // icon={<FaRegPlusSquare size={"3em"} />}
            icon={<UpDownIcon color="green" size={"3em"} />}

          />
        </Link>
        <Link href={"/blog"}>
          <StatsCard
            title={"Release Slate"}
            stat={props.props.blog_count?props.props.blog_count:0}
            // icon={<FaRegPlusSquare size={"3em"} />}
            icon={<UpDownIcon color="red" size={"3em"} />}

          />
        </Link>

      </SimpleGrid>
    </Box>
  );
}
