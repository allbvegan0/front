// import React, { useEffect } from "react";
// // import Button from "@material-ui/core/Button";
// import {
//   captureFromRazorpay,
//   nextOrderStep,
//   previousOrderStep,
// } from "../../../redux/order/order.actions";
// import { RootState } from "../../../redux/root.reducer";
// import { connect, ConnectedProps } from "react-redux";
// import { Button } from "@chakra-ui/react";
// // import { ClearCart } from "../../../redux/cart/cart.actions";

// const __DEV__ = document.domain === "localhost";

// function RazorApp(props: Props) {
//   const {
//     nextStep,
//     previousStep,
//     captureFromRazorPay,
//     ClearCart,
//     activeStep,
//     orderItems,
//     currentUser,
//     recieved_order_from_server,

//     // createShopForUser,
//     // error on subscription
//     // onn on
//     // ºµ
//     // error on 0
//     // status 200 ok ø˚ ºø˚
//     // status 404 error ´®®ø®
//     // dhosh nivarann gatividhi
//     // ®dosh h ®dosh n ®dosh i †capitol
//     //
//   } = props;

//   console.log("---->1", recieved_order_from_server);

//   const { id, gateway_orderId } = recieved_order_from_server;

//   let orderTotal = 0;
//   orderItems.forEach((v: any) => {
//     return (orderTotal += v.item.price * v.quantity);
//   });

//   const options = {
//     key: __DEV__ ? "rzp_test_DalpCzU1jIM2ID" : "PRODUCTION_KEY",
//     amount: orderTotal * 100, //  = INR 1
//     name: "AllBvegan",
//     receipt: id,
//     order_id: gateway_orderId,
//     description: "A to B avoiding C",
//     // –––––––––––––-__-–†tT†oOøº0)¬lL(eye-Left-)¬´ƒ†(ear_´å®_¬´ƒ†)(hand_–˙å˜∂-¬´ƒ†)(feet_-ƒ´´†__-–ƒøø†)
//     image: "http://localhost:4000/uploads/assets/images/logo.jpg",
//     handler: function (response: any) {
//       console.log("Take to next order status step");
//       console.log("--==--==-->", response);
//       captureFromRazorPay(gateway_orderId);

//       nextStep(activeStep);
//       ClearCart();
//     },
//     prefill: {
//       name: currentUser.name,
//       contact: currentUser.phone,
//       email: currentUser.email,
//     },
//     notes: {
//       address: "testing address of c",
//     },
//     theme: {
//       color: "blue",
//       hide_topbar: false,
//     },
//   };

//   const openPayModal = () => {
//     var rzp1 = new (window as any).Razorpay(options);
//     rzp1.open();
//   };
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//     // openPayModal();
//   }, []);

//   return (
//     <>
//       <Button onClick={() => previousStep(activeStep)}>Back</Button>
//       <Button onClick={openPayModal} variant="contained">
//         Pay {orderTotal}
//       </Button>
//     </>
//   );
// }

// const mapDispatch = {
//   nextStep: (data: number) => nextOrderStep(data),
//   previousStep: (data: number) => previousOrderStep(data),
//   captureFromRazorPay: (data: any) => captureFromRazorpay(data),

//   // ClearCart: () => ClearCart(),
// };

// const mapState = (state: RootState) => ({
//   activeStep: state.order.activeStep,
//   orderItems: state.order.cartItems,
//   currentUser: state.user.currentUser,

//   recieved_order_from_server: state.order.recieved_order_from_server,
// });

// const connector = connect(mapState, mapDispatch);
// type PropFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropFromRedux {
//   activeStep: number;
//   // captureFromRazorpay(data: any): any;
//   // createShopForUser(data: any): any;

//   nextStep(data: number): any;
//   previousStep(data: number): any;
//   ClearCart(): any;
//   orderItems: any;
//   currentUser: any;

//   recieved_order_from_server: any;
// }

// export default connector(RazorApp);
export {}