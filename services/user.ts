import axios from "axios";
import { session } from "next-auth/client";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { baseUrl, setHeader } from "./setHeader";
// no method names
// dictionary all methods 
// define dictionary {} in python :-D
// 
// export const getUsers = async () => {
//   return await axios
//     .post(
//       baseUrl,
//       {
//         query: `
//       query users{
//         users {
//           image,
//           author{
//             name,
            
//           },
//           createdAt
//         }
//       }
//     `,
//         // variables: { _id: _id },
//       },
//       {
//         headers: await setHeader(),
//       }
//     )
//     .then((data) => {
//       console.log(data);
//       return data.data.data.users;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };



export const getUserDetails = async (id: number) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
  query user(
    $id: Number!

  ) {
    user(
      id: $id 
    ) {
      name
      id
      email
      image
      emailVerified
      phone
      role
    
    }
  }
`,
        variables: {
          id: id,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data);
      return data.data.user;
    })
    .catch((error) => {
      console.log(error);
    });
};


export const updateUserImage = async (image?: string) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
  mutation updateUser(
    $image: String!
  ) {
    updateUser(
      image: $image
    ) {
      id
      email
      password
      name
      phone
      image
      role
      emailVerified
    }
  }
`,
        variables: {
          image: image,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data);
      return data.data.createUser;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMe = async(email: string)=>{

  return await axios
  .post(
    baseUrl,
    {
      query: `
      query user(
      $email: String!
  
    ) {
      me(
        email: $email
      ) {
        name
        id
        email
        image
        phone
        emailVerified
        role
      }
    }
  `,
      variables: {
        email: email,
      },
    },
    {
      headers: await setHeader(),
    }
  )
  .then((data) => {
    console.log('=-=-=-=-=-=->',data.data);
    return data.data.data.me;
  })
  .catch((error) => {
    console.log(error);
  });

}