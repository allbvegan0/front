import React from "react";
import { GetServerSideProps } from "next";
import { PostProps } from "../../components/molecules/decorative/post";
import Layout from "../../components/molecules/decorative/layout";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

// import prisma from "../../lib/prisma";
import { useSession } from "next-auth/client";
import { Box, Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { baseURL } from "../blog";
import Title from "../../components/molecules/decorative/title";
import Description from "../../components/molecules/decorative/description";
import { gql, useQuery } from "@apollo/client";
import { useUser } from "../../hooks/nav";

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const {id}  = params
//   const res = await fetch(`${baseURL}/post/${id}`);
//   console.log("--==",res)
//   const _post = await res.json();
//   console.log('------>',_post)
//   return {
//     props: {..._post}
//   };
// };

const GET_USER_POSTS = gql`
  query getUserPosts($id: Int!){
    userPosts(id: $id){
      id
      title
      content
    }
  }
`

async function publishPost(id: number): Promise<void> {
  await fetch(`${baseURL}/post/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

async function deletePost(id: number): Promise<void> {
  await fetch(`${baseURL}/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/");
}

async function cancelP(): Promise<void> {
  await Router.back();
}

const Post: React.FC<PostProps> = (id) => {
  const {data, loading, error} = useQuery(GET_USER_POSTS,{variables:{id: id}})
  const{userPosts:props} = data
  const user = useUser()
  // const [session, loading] = useSession();
  if (loading) {
    return <div>Authenticating ...</div>;
  }

  if(error){
    return <>Error: {error}</>
  }
  
  const userHasValidSession = Boolean(user.emailVerified);
  const postBelongsToUser = user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <Flex m={4}>
          <Box p="4" bg="grey.400" spacing={6}>
            <Description >{title}</Description>
            <p>By {props?.author?.name||props?.author?.email || "Unknown author"}</p>
            <ReactMarkdown children={props.content} />
            {!props.published && userHasValidSession && postBelongsToUser && (
              <Button onClick={() => publishPost(props.id)}>Publish</Button>
            )}
            {userHasValidSession && postBelongsToUser && (
              <Button onClick={() => deletePost(props.id)}>Delete</Button>
            )}
            {userHasValidSession && postBelongsToUser && (
              <Button onClick={() => cancelP()}>Cancel</Button>
            )}
          </Box>
          <Spacer />
          <Box p="4" bg="green.400">
            {`Likes: ${7}, shares: ${3}`}<br/>
            <Link href={"/blog"}>
            Back to blog
            </Link>
          </Box>
        </Flex>
      </div>
    </Layout>
  );
};

export default Post;

// {
// 	"resource": "/Users/workforfilms/help-india/help-india/front/pages/p/[id].tsx",
// 	"owner": "typescript",
// 	"code": "2322",
// 	"severity": 8,
// 	"message":
//   "Type '{ source: string; }' is not assignable to type 'IntrinsicAttributes & Pick<ReactMarkdownOptions,
//   \"children\" | \"className\" | keyof PluginOptions | keyof RehypeFilterOptions | keyof TransformOptions>
//   & Pick<...> & Pick<...>'.\n
//   Property 'source' does not exist on type
//   'IntrinsicAttributes & Pick<ReactMarkdownOptions,
//   \"children\" | \"className\" | keyof PluginOptions | keyof RehypeFilterOptions | keyof TransformOptions>
//   & Pick<...> & Pick<...>'.",
// 	"source": "ts",
// 	"startLineNumber": 68,
// 	"startColumn": 24,
// 	"endLineNumber": 68,
// 	"endColumn": 30
// }

// Email:// send go passwordless
// Phone:// go passwordless
// no_password_policy