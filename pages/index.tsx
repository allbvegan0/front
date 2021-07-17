import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

import Initiate_Front from "../components/organism/register_device";
import { Box } from "@chakra-ui/layout";
import Message from "../components/molecules/decorative/message";
import Description from "../components/molecules/decorative/description";
import SearchInput from "../components/organism/search";
import Logo from "../components/molecules/decorative/logo";
import { Center } from "@chakra-ui/react";
import ViewOption from "../components/organism/view/view-option-tab";

import RecipeThoghts from "../components/organism/feed/thoughts/recipe";
import {
  ProductCardsP,
  ProductThumbs,
} from "../components/organism/feed/products/product.thum.list";
import DATA from "../components/rasa/watch/apiCombined";

export default function Home(props) {
  // console.log('---===----->',DATA)

  return (
    <div className={styles.container}>
      <Head>
        <title>ållßvegan: ®™</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#90cdf4"/>
        {/* <!-- this sets logo in Apple smatphones. --> */}
<link rel="apple-touch-icon" href="/logo-96x96.png" />
{/* <!-- this sets the color of url bar in Apple smatphones --> */}
<meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      </Head>
      {/* <Initiate_Front /> */}

      <Center>
        <Box fontSize={["sm", "md", "md", "md"]} minWidth="380">
        {/* <Description >जंमौशधिमंन्त्रतप:समधिजा:सिद्धय: ।।४.º.॰॰॰।।१।।</Description> */}

          <Message>Welcome to</Message>
          <Logo />

          <Center>
            <SearchInput />
          </Center>
          <Description>
            Use ållß-Searchbox to find nearest resources. from network.
          </Description>

          <Description>Favourite Products</Description>
          <Center w="100%"></Center>
          <ViewOption />
          <ProductThumbs />

          <Description>Latest Products</Description>

          <ViewOption />
          <ProductCardsP />
          <Description>Testemoninals</Description>
          <RecipeThoghts />
          <ViewOption />
        </Box>
      </Center>
    </div>
  );
}

// export async function getServerSideProps(ctx) {
// // console.log('context at index',ctx)
//   return { props: { } };
// }
