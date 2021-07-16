import { gql } from "@apollo/client";
import axios from "axios";
import { Address } from "../redux/slices/user/address";
import { baseUrl, setDataHeader, setHeader } from "./setHeader";

const q = `query addresses(
  $email: String!

) {
  addresses(email: $email){
    street_address
    city
    country
    zipcode
    
}
}`;



const qa = `mutation addAddress(
  $street_address: String! 
  $line2_address: String
  $city: String!
  $state: String!
  $country: String!
  $zipcode: String!
  $x: Float
  $y: Float

  ){
  addAddress( street_address: $street_address, line2_address: $line2_address, city: $city, state: $state, country: $country, zipcode: $zipcode, x: $x, y: $y){
    street_address
    state
    country
    zipcode

  }
}`;



export const addAddressesForEmail =async(data)=>{
  console.log('adrress to add in axios',data)
  const {address:{street_address, line2_address, city, state, country, zipcode }, email}= data
  const addresses = await axios
  .post(
    baseUrl,
    {
      query: `${qa}`,
      variables: { street_address: street_address, line2_address: line2_address, city: city, state: state, country: country, zipcode: zipcode, x: 1.03, y: 2.01 },
    },
    {
      headers: await setDataHeader(),
    }
  )
  .then((data) => {
    {
      // if(!data?.error){

      console.log("[[]]-->from w_s to add", data.data);

      return data.data;
      // }
    }
  })
  .catch((e) => {
    console.log(e);
  });

console.log("add addresses-=-=-=-=>", addresses);
return addresses;

}

export const GET_ADDRESS_ = gql`
  ${q}
`;

export const getUserAddresses = async (me) => {
  const addresses = await axios
    .post(
      baseUrl,
      {
        query: `${q}`,
        variables: { email: await me.email },
      },
      {
        headers: await setDataHeader(),
      }
    )
    .then((data) => {
      {
        // if(!data?.error){

        console.log("[[]]-->from w_s", data.data);

        return data.data;
        // }
      }
    })
    .catch((e) => {
      console.log(e);
    });

  console.log("addresses-=-=-=-=>", addresses);
  return addresses;
};


const qd = `mutation deleteAddress(
  $street_address: String!
  $zipcode: String!
) {
  deleteAddress(street_address: $street_address zipcode: $zipcode){
    user{
      id
    }
}
}`;

export const deleteUserAddress = async (data) => {
  console.log('for deletinng==>',data)

  const address = await axios
    .post(
      baseUrl,
      {
        query: `${qd}`,
        variables: { street_address: data.street_address, zipcode: data.zipcode },
      },
      { headers: await setDataHeader() }
    )
    .then((data) => {
      {
        console.log("[[]]-===->from delete_address", data.data);
        return data.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });

  console.log("addresses-=-=-=-=>", address);
  return address;
};


export const getAddressesFromEmail = async (me) => {
  console.log('?me',me)
  const add = await axios
    .post(
      baseUrl,
      {
        query: `${q}`,
        variables: { email: await me.email },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      {
        console.log("[[]]from w_s", data.data);
        return data.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });
    console.log('addresses-=-=>',add);
    return await add
};