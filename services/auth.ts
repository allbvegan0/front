import axios from "axios";
import React from "react";
import { baseUrl, setHeader } from "./setHeader";

export async function login(login_data: any) {
  console.log("---lunpwd", login_data);
  return await axios
    .post(
      baseUrl,

      {
        query: `
        mutation Login_User($email: String! $password: String!){
          login(email: $email, password: $password) {
            sessionToken
            user
            {
              name
              email
              emailVerified
            }
            accessToken
          }
        
        }`,
        variables: { email: login_data.email, password: login_data.password },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log("---===---->login user", data);
      const sub_c = data.data.data.login;
      return sub_c;
    })
    .catch((e) => {
      console.log("error while logging", e);
    });
}

export async function register(register_data: any) {
  console.log("---lunpwd", register_data);
  const { email, name, phone, password, deviceId } = register_data;
  return await axios
    .post(
      baseUrl,

      {
        query: `
        mutation(
          $email: String!
          $name: String!
          $phone: String!
          $password: String!
          $deviceId: String!
        ) {
          signup(email: $email, name: $name, phone: $phone, password: $password, deviceId: $deviceId) {
            token
          }
        }`,
        variables: {
          email: email,
          name: name,
          phone: phone,
          password: password,
          deviceId: deviceId,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log("---===---->registered user", data);
      const sub_c = data.data.data.signup;
      return sub_c;
    })
    .catch((e) => {
      console.log("error while logging", e);
    });
}


export const createDirectSession=async(userdata)=>{
  // var token = 'start webbing'
  console.log("---user_data_for email session", userdata);
  const { email } = userdata;
  // const {access_token, deviceId} = accountdata
 
  var deviceId = window.localStorage.getItem('device_id')
  console.log('device id', deviceId)


  return await axios
    .post(
      baseUrl,

      {
        query: `
        mutation(
          $email: String!
          $deviceId: String!
        ) {
          createDirectSession(email: $email deviceId: $deviceId) {
            token
            user {
              email
              role
            }
          }
        }`,
        variables: {
          email: email,
          // phone: phone,
          // C api to li za t-ion..
          // ? T on or Sh on 
          //  

//           export type TypeORMAdapter<
//   C = ConnectionOptions | string,
//   O = { models?: TypeORMAdapterModels },
//   U = User,
//   P = Profile,
//   S = Omit<Session, "expires"> & { expires: Date }
// > = Adapter<C, O, U, P, S>
//  
          // accessToken: access_token,
          deviceId: deviceId,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log("---===---->session guest login user", data);
      const sub_c = data.data.data.createDirectSession;
      return sub_c;
    })
    .catch((e) => {
      console.log("error while logging", e);
    });
}

export async function verify(verification_data: any) {
  const { token, device_id } = verification_data;
  return await axios
    .post(
      baseUrl,

      {
        query: `
        mutation(
          $token: String!
          $deviceId: String!
        ) {
          verifyToken(token: $token, deviceId: $deviceId) {
            accessToken
  
          }
        }`,
        variables: {
          token: token,
          deviceId: device_id,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log("---===---->verify email", data);
      const sub_c = data.data.data.verifyToken;
      return sub_c;
    })
    .catch((e) => {
      console.log("error while logging", e);
      return e
    });
}