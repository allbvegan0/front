import axios from "axios";
import { baseUrl, setHeader } from "./setHeader";

// bio: string;
// image: string
// addresses:Address[]

export const createProfile = async (image: string) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
  mutation createProfile(
    $image: String!
  ) {
    createProfile(
      image: $image
  
    ) {
      image
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
      console.log("getting profiled", data);
      return data.data.createProfile;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProfileDetails = async (email: string) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
  query emailProfile(
    $email: String!

  ) {
    emailProfile(
      email: $email
    ) {
      image
      bio

    
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
      console.log(data);
      return data.data.post;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserProfiles = async (name: string) => {
  console.log("Start device update", name);
  return await axios
    .post(
      baseUrl,
      {
        query: `
      query posts($name: String!){
        userProfiles ($name: String){
          image,
          user{
            name,
          },
          bio,

          createdAt
        }
      }
    `,
        variables: { name: name },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data);
      return data.data.userProfiles;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addAddress = async (data: any) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
      
      `,
        variables: {},
      },
      {
        headers: await setHeader(),
      }
    )
    .then()
    .catch();
};
