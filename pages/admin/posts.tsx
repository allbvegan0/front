import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/molecules/decorative/layout";
import Post, { PostProps } from "../../components/molecules/decorative/post";
import { gql, useQuery } from "@apollo/client";


// network build solved
export const baseURL = "http://localhost:4000";

// type Data = [{  }]
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch(`${baseURL}/feed`);
//   const _feed = await res.json();
//   // const { posts } = _feed;
//   console.log(_feed)
//   return {
//     props: {
//       feed: _feed,
//     },
//   };
// };
// type Props = {
//   feed: PostProps[];
// };

const GET_FEED_ADMIN=gql`
query getFeeds{
  feeds{
    id
    title 
    content
  }
}
`

const Posts = () => {
  const {data, loading, error} = useQuery(GET_FEED_ADMIN)

  if(loading){

    return <>loading..</>
  }
  if(error){
    return <>Error: {error}</>
  }

  const { drafts: posts } = data;
  console.log("--º", posts);
  if (posts && posts.length !== 0) {
    return (
      <Layout>

        <div className="page">
          <h2>All Post Feed</h2>
          <main>
            {posts.map((post) => (
              <div key={post.id} className="post">

                <Post post={post} />

              </div>
            ))}
          </main>
          <br/>
        </div>
      </Layout>
    );
  } else {
    return <div>No data found</div>;
  }
};

export default Posts;
