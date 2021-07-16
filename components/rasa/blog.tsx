import React from "react";
import { GetStaticProps } from "next";
// import Layout from "../components/Layout";
// import Post, { PostProps } from "../components/Post";
// import prisma from "../../lib/prisma";
import Post, { PostProps } from "../molecules/decorative/post";
import Layout from "../molecules/decorative/layout";

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h2>Public Feed</h2>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
