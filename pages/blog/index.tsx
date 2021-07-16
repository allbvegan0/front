import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/molecules/decorative/layout";
import Post, { PostProps } from "../../components/molecules/decorative/post";
import { gql, useQuery } from "@apollo/client";


// network build solved
export const baseURL = "http://localhost:4000";

// type Data = [{  }]
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch(`${baseURL}/blog`);
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

const GET_BLOGS = gql`
  query getBlogs{
    blogs{
      id
      title
      content
    }
  }
`

const Blog = () => {
  const {data, loading, error} = useQuery(GET_BLOGS)

  const { blogs: posts } = data;
  console.log("--º", posts);
  if (posts && posts.length !== 0) {
    return (
      <Layout>

        <div className="page">
          <h2>Public Feed</h2>
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

export default Blog;
