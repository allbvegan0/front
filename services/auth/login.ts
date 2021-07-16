import axios from "axios";
import React from "react";
import { baseUrl, setHeader } from "../setHeader";

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
            sessionToken
            user{
              name
              email
              emailVerified
            }
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
