import React, { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Grid,
  Center,

  Button,
  Icon,
} from "@chakra-ui/react";


import { tiers } from "./tiers";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ShopSubscriptionPop from "../../molecules/pops/shop-subscription";
import ShowQR from "../../../pages/components";
import RazorApp from "../../../helpers/paymets/razorpay_subscription";
import { useUser } from "../../../hooks/nav";
import Description from "../../molecules/decorative/description";
import { Subscription } from "react-hook-form/dist/utils/Subject";


function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  const [i, setI] = React.useState(0)
  const [tier, setTier] = React.useState([])
  const user = useUser()
console.log('clear logs show at subscription', props)
const {shop, me} = props

  // razorpay ui modal
  // find current subscription
  // const subscription = 
//   React.useEffect(() => {
//     let mount = true
// if(mount){
//   if(props?.subscription?.amount==="200"){
//     setI(0)
//   } 
//   if(props?.subscription?.amount==="49900"){
//     setI(1)
//   }
//   setTier(tiers.slice(i,4))
// }
//     return () => {
//       mount=false
//     }
//   }, [i, setI, ])



  console.log('check filter-->',tier)
  

  return (

    // current subscription if any filter tier add card for current subscription
    <Box py={12} >
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          digital shop for your potential customers with this panel. It&apos;s
          built with latest technologies and helps you with ML & AI to find
          consumers for your products.
        </Text>
      </VStack>
      <Grid
                p={3}
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                ]}
                gap={4}
       
      >
        {tiers.map((price, index) => {
          if(shop.amount_paid_for_subscription/100>Number(price.price)){

            return null
         } 
          if(shop.amount_paid_for_subscription/100===Number(price.price)){

               return <Center key={index}>
                 <Box><Description>{`Activated ${price.title}`}</Description>
                 <br/><>avialable upgrades</>
                 <br/><>{`orderId: ${props.subscription.mediumId}`}</>
                 <br/><>{`actived on: avialable upgrades`}</>

                 <br/><>{`actived till: avialable upgrades`}</>


                 
                 </Box></Center>
            } else{

            return <Box maxW={"380px"}
            minWidth={"280px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={2}
            textAlign={"center"}
            key={price.title}
            >
            <PriceWrapper >
              <Text fontWeight="500" fontSize="2xl">
                {price.title}
              </Text>
              <Text fontWeight="500" fontSize="2xl">
                {price.subheader}
              </Text>
              <Box py={4} px={12}>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    ₹ {price.price}
                  </Text>
                  {price.title === "Enterprise" ? (
                    ""
                  ) : (
                    <Text fontSize="3xl" color="gray.500">
                      /month
                    </Text>
                  )}
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                {price.description.map((item, index) => {
                  return (
                    <HStack key={index}>
                      <Icon as={CheckCircleIcon} color="green.400" />
                      <Text>{item}</Text>
                    </HStack>
                  );
                })}
                <ShowQR message={`allbvegan/pay/from/${user.email}/${price.price}`}/>
                <Box w="80%" pt={2} bg="pink" borderRadius="md" dropShadow="2xl">
                  
                  <RazorApp  price = {price.price} {...props}/>


                </Box>
              </VStack>
            </PriceWrapper>
            </Box>
        }
      })}

        
      </Grid>
    </Box>
  );
}
