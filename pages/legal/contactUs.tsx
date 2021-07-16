import { Center, Link } from "@chakra-ui/react";
import React from "react";
import Description from "../../components/molecules/decorative/description";

import Title from "../../components/molecules/decorative/title";

const address = [
  {
    street_address:"A-164, Kabeer Nagar, Shahdara",
    state:"Delhi",
    country:"INDIA",
    zip_code:"1100094",
    contact: "+91-9811720270",
    email:"allb@allbvegan.com",
    web:"www.allbvegan.com",
    social:["facebook","instagram","youtube","github"]


  }
]
const ContactUs = () => {
  return (
    <div>
      <p>
        For any query Contact Us <br/>
        <Link href={`https://allbvegan.com/auth/login`}><span >ållßvegan.com</span></Link> 
      </p>
      <br/>
      <Title>
        Contact Us
        </Title>
        <Description>{address[0].street_address}</Description>
        <Description>{address[0].state}</Description>
        <Description>{address[0].country}</Description>
        <Description>{address[0].zip_code}</Description>
        <Description>{address[0].contact}</Description>
        <Description>{address[0].email}</Description>
        <Description>{address[0].web}</Description>
        {
          address[0].social.map((i, index)=>{
            return <Center key={index}>
              <div >{i}</div>
              </Center>
          })
        }
        <br/>
        <br/>

        <br/>





      

    </div>
  );
};

export default ContactUs;