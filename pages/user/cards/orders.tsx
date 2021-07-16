import React from "react";
// import { } from '@chakra-ui/layout'
import {Box,Heading,useColorModeValue} from '@chakra-ui/react'
import Description from "../../../components/molecules/decorative/description";
import {Link} from "@chakra-ui/react";
import { useFlip } from "../../../hooks/nav";
import { ArrowUp } from "../../../assets/icons/icons/ArrowUp";



const order_history = [
  {
    orderId: 1,
    orderStatus: "delivered",
    orderDate: "02/01/2021",
    deliveryDate: "05/01/2021",
  },
  {
    orderId: 2,
    orderStatus: "at_inventory",
    orderDate: "02/01/2021",
    deliveryDate: null,
  },
];

const SubscriptionDetails = (props)=>{
  console.log('props at --=> subscriptionn details',props)
  // const {subscription:{create_subscription_order:{amount}}}=props
  // const subscription = useFlip(props.subscription.create_subscription_order)
  // const me = useFlip(props.me.user)
  const {shop, me} = props
  console.log('Flipped--==--==<>',shop, me)
  if(shop){

    var {amount_paid_for_subscriptiion: amount} = shop
  }
  return <Box
  maxW={"320px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={6}
  textAlign={"center"}
>
  <h2
    style={{
      fontFamily: "sans-serif",
      fontSize: "29",
      fontWeight: "bold",
    }}
  >
    Order History +++
  </h2>
  {/* <IconView/> */}
  <Link href="/shop/shopDashboard">
  <ArrowUp height={"240px"} width={"200px"} color="violet"/>
  </Link>
  <br />
  <h2
    style={{
      fontFamily: "sans-serif",
      fontSize: "29",
      fontWeight: "bold",
    }}
  >
    {shop?.id?`Welcome ${me.user.name}`:"On the way"}
  </h2>
  {shop?.id?<>Subscription found</>:<>Subscriptionn Not found</>}<br/>
  {shop?.amount_paid_for_subscription?amount:"not yet registered"}
</Box>
}

const OrderHistory = (props)=>{
  const {shop, me} = props
  console.log(shop, me)
  return <>  
  <Box
    maxW={"320px"}
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"lg"}
    p={6}
    textAlign={"center"}
  >
  
    <h1>{`welcome. ${me.user.email}. I M here`}</h1>
    <Box>
    {shop?.id?"Goto Dashboard":"TRY ALLB-MALL"}
    <Link href={"/shop/shopDashboard"} >
    <div>
      <Heading color="green">Goto Shop </Heading>
      {shop?.id?<Description>Dashboard</Description>:<Description>Registration</Description>}</div>
    </Link>
  </Box>
  <SubscriptionDetails {...props}/>
  </Box>
  </>

}

export default OrderHistory