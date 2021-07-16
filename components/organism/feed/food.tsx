// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// create a taost showing visible message comming from prisma & redux already present in redux-state

// npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
//

import * as React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}

// import { ChakraProvider } from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;

// npm i @chakra-ui/gatsby-plugin
