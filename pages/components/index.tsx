// import { SubscriptionCurrentObservable } from "@apollo/client";
// import { IconButtonProps } from "@chakra-ui/react";
import QRCode from "qrcode.react";
// import React, { Provider } from "react";
// import { string } from "yup";
// import Button from "../../components/atoms/button";
// import { LoginForm } from "../../components/forms/auth/loginForm";
// import Description from "../../components/molecules/decorative/description";
// import Logo from "../../components/molecules/decorative/logo";
// import { PhoneField } from "../../components/molecules/input/phoneInput";
// import Providers from "../../components/organism/auth/providers";

// const ShowQR = () => {
//   return (
//     <>
//       <Logo />
//       <QRCode
//         size={100}
//         value="http://test.allbvegan.com.s3-website.ap-south-1.amazonaws.com/consumer/dashboard/"
//       />
//       {/* <Open Invite/> */}
//       <Description>Scan QR to Invite</Description>
//       {/* <SubscriptionCurrentObservable> */}
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>* :*/*['*/*'][(['name']):(['space'])] name : allb space : vegan
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <QRCode
//         size={100}
//         value="http://test.allbvegan.com.s3-website.ap-south-1.amazonaws.com/"
//       />
//       <LoginForm />
//       <Providers />
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <QRCode
//         size={100}
//         value="http://test.allbvegan.com.s3-website.ap-south-1.amazonaws.com/login/"
//       />
//       <form>
//         <input type="phone" />
//         <PhoneField />
//         {/* <label>Send Verification number</label> */}
//         <Button label="Send Code"></Button>
//       </form>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       {/* <IconButtonProps></IconButtonProps> */}
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };

// // export const Reciept = () => {
// //   id: string;
// // };
const message = "Activate with Install From Code" 
const ShowQR = ({message})=>{
  console.log('subscription amount message',message)
return <>
<QRCode key={"a"} size={200} value={message}></QRCode>
{/* <h3>{message}</h3> */}
</>
}
export default ShowQR;

// export {}