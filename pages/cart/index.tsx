import React from "react";
import { SimpleGrid, Box, VStack, HStack, Image } from "@chakra-ui/react";

const product = {
  name: "allb-auth",
  imageUrl: "images/piccolo/products/body buttter/600x600/aloe butter.png",
  variant: [
    {
      // price: faker.commerce.price(),
      price: 499.0,

      size: "Health",
      // color: faker.commerce.color(),
    },
    {
      price: 276.0,
      size: "Shoe",
    },
  ],
  // beninfits: faker.commerce.productAdjective(),
  // description: faker.commerce.productDescription(),
  // category: faker.commerce.department(),/Users/workforfilms/help-india/help-india/front/public/images/piccolo/products/body buttter/600x600/aloe butter.png
  category: "Industrial",
};

const cart_product = {
  q: 5,
};

function Cart() {
  const selected_array = [1, 2, 3];
  // const product = await p;
  return (
    <SimpleGrid
      columns={1}
      spacing={2}
      maxW="900px"
      justifyContent="center"
      padding="2"
    >
      <Box fontFamily="sans-serif" fontSize="2xl" noOfLines={1}>
        {product.name}
      </Box>
      <HStack flexWrap="nowrap" justifyContent="space-around">
        <Box
          height="80px"
          w="99px"
          // bg="purple"
        >
          <Image
            src={product.imageUrl}
            fill="Background"
            height="80px"
            // w="100px"
            marginLeft="1"
          />
        </Box>
        <VStack
          w="40%"
          h="100%"
          m={1}
          // bg="black"
        >
          <Box
            w="100%"
            height="20px"
            // bg="blue"
            fontFamily="sans-serif"
            textAlign="left"
            fontSize="1xl"
          >
            Price: {product.variant[0].price}
          </Box>
          <Box
            w="100%"
            height="20px"
            // bg="blue"
            fontFamily="sans-serif"
            textAlign="left"
            fontSize={["sm", "1xl"]}
          >
            Category: {product.category}
          </Box>
          <Box
            w="100%"
            height="20px"
            // bg="blue"
            fontFamily="sans-serif"
            textAlign="left"
            fontSize="1xl"
          >
            Quantity: - {cart_product.q} +
          </Box>
        </VStack>
        <Box
          w="40%"
          height="80px"
          fontFamily="monospace"
          fontSize={["25", "40"]}
          textAlign="center"
          // bg="purple"
        >
          ₹ {product.variant[0].price * cart_product.q}.00
        </Box>
      </HStack>

      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>

      <Box w="100%" h="100px" bg="green" justifyContent="flex-end">
        <HStack marginBottom="5px" bg="yellow" justifyContent="flex-end">
          <Box
            // margin={8}
            bg="yellowgreen"
            w="100%"
            height="80px"
            fontFamily="sans-serif"
            fontSize="40px"
            textAlign="center"
          >
            Pay Now
          </Box>
          <VStack w="100%" bg="pink">
            <Box w="100%" height="15px" bg="gray" textAlign="center">
              Total Amount
            </Box>

            <Box bg="red" w="100%" height="80px" fontSize="30px">
              8000
            </Box>
          </VStack>
        </HStack>
      </Box>
    </SimpleGrid>
  );
}

export default Cart;
