import React from "react";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../../components/molecules/decorative/post";
import { useSession, getSession } from "next-auth/client";
import Layout from "../../components/molecules/decorative/layout";
import { baseURL } from "../blog";
import withAuth from "../../helpers/withAuth";
import { gql, useQuery } from "@apollo/client";

// export const getServerSideProps: GetServerSideProps = async () => {

//   const _res = await fetch(`${baseURL}/admin/draft`);
//   const _feed = await _res.json();
//   console.log('------=96=--->',_res)
//   // const { drafts } = _res;
//   return {
//     props: {  drafts: _feed },
//   };
// };

// type Props = {
//   drafts: PostProps[];
// };
const GET_DRAFTS_FOR_ADMIN = gql`
  query getDrafts{
    drafts{
      id
      title
      content
    }
  }
`


const Drafts = () => {
  const {data, loading, error} = useQuery(GET_DRAFTS_FOR_ADMIN)
  const props = data
  if(!props){
    return <h3>loading..</h3>
  }

if(loading){

  return <>loading..</>
}
if(error){
  return <>Error: {error}</>
}

  if (!props.drafts) {
    return (
      <Layout>
        <h2>My Drafts</h2>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page">
        <h2>My Drafts</h2>
        <main>
          {props.drafts.map((post) => (
            post?
            <div key={post.id} className="post">
              <Post post={post} />
            </div>: <h3>No post found</h3>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }
        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default withAuth(Drafts);
