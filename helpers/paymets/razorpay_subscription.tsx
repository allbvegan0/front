import React, { useEffect } from "react";
import { connect, ConnectedProps, useDispatch, } from "react-redux";
import {Button} from "@chakra-ui/react";
import { AppState } from "../../redux/store";
import { useSubscriptionOrder, useUser } from "../../hooks/nav";
import { handlecreateSubcription, handleUpdateSubcription } from "../../redux/thunk/subscription";
import { commonActions } from "../../redux/slices/common";
import { useSubscription } from "@apollo/client";
function RazorApp(props) {
  if (process.browser) {
  var __DEV__ = document.domain === "localhost";
  }
  //  const data = useUser()
   console.log("---->1 at razor", props);
const {price, subscriptionOrder, currentUser:data } = props
let orderTotal = 0
  if(price!=="call"){

    orderTotal = Number(price);
  } else {
    orderTotal = 11

  }
  var sub = null
  useEffect(() => {
    let mount = true
    if(mount){
      subscriptionOrder
    }
    return () => {
      mount = false
    }
  }, [subscriptionOrder])


  const options = {
    key: __DEV__ ? "rzp_test_DalpCzU1jIM2ID" : "PRODUCTION_KEY",
    amount: orderTotal * 100, //  = INR 1
    name: "AllBvegan",
    receipt: subscriptionOrder?.id,
    order_id: subscriptionOrder?.mediumId,
    description: "A to B avoiding C",
    image: "/logo_cir.png",
    handler: function (response: any) {
      console.log("Take to next order status step");
      console.log("--==--==-->", response);
      if(response.razorpay_payment_id && subscriptionOrder.mediumId){
        // const subscription = useSubscription(state.subscription.Subscription) 
        // const sub = useSubscriptionOrder()
        console.log('----->10>',response.razorpay_payment_id, subscriptionOrder)
        const {razorpay_payment_id} = response
        const {mediumId} = subscriptionOrder
        dispatch(handleUpdateSubcription({mediumId: mediumId, payment_id: razorpay_payment_id}))
      } else {
        dispatch(commonActions.showToast({message:"Error recieving payment", type:"error"}))
      }

      // captureFromRazorPay(gateway_orderId);

    },
    prefill: {
      name: data?.name,
      contact: `${+91}-${data?.phone}`,
      email: data?.email,
    },
    notes: {
      address: "testing address of c",
    },
    theme: {
      color: "#9acd32",
      hide_topbar: false,
    },
  };

  const dispatch = useDispatch()
  const openPayModal = () => {
    dispatch(handlecreateSubcription({subscriptionType:price}))
    var rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    // openPayModal();
  }, []);



  return (
    <>

{      
orderTotal===11?( <Button 
  fontWeight="extrabold"
  color="white"
w="full"
colorScheme="green"
onClick={()=>alert("For further informationn Call +91-9811720270")} variant="contained">
Call +91-9811720270
</Button>):
<Button 
 fontWeight="extrabold"
 color="white"
w="full"
colorScheme="pink"
onClick={openPayModal} variant="contained">
        Pay ₹ {orderTotal}/-
      </Button>}
    </>
  );
}



export default RazorApp;
