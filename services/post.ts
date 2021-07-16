import axios from "axios";
import { session } from "next-auth/client";
import { baseUrl, setHeader } from "./setHeader";

export const getPosts = async () => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
      query posts{
        posts {
          title,
          author{
            name,
            
          },
          content,
          createdAt
        }
      }
    `,
        // variables: { _id: _id },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data);
      return data.data.data.posts;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createPost = async (title: string, content: string, name: string) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
  mutation createPost(
    $title: String!
    $content: String!
    $name: String!
  ) {
    createPost(
      title: $title
      content: $content
      name: $name
  
    ) {
      title
      id
      content
      author{
        name
      }
    
    }
  }
`,
        variables: {
          title: title,
          content: content,
          name: `${name}`
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data);
      return data.data.createPost;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPostDetails = async (id: number) => {
  return await axios
    .post(
      baseUrl,
      {
        query: `
  query post(
    $id: Int!

  ) {
    post(
      id: $id 
    ) {
      title
      id
      content
      published
    
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
      return data.data.post;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserPosts = async(name: string)=>{
  console.log("Start device update", name);
  return await axios
    .post(
      baseUrl,
      {
        query: `
      query posts($name: String!){
        userPosts ($name: String){
          title,
          author{
            name,
            
          },
          content,
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
      return data.data.userPosts;
    })
    .catch((error) => {
      console.log(error);
    });
}