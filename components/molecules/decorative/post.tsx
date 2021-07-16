import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { Avatar, background } from "@chakra-ui/react";
// import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
    image: string;
  } | null;
  content: string;
  creation_date: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
      style={{ boxShadow: "inherit", background: "beige", opacity: "100%" }}
    >
      <h2>{post.title}</h2>
      {/* <Avatar size="sm" name={authorName} src={post.author.image} marginRight={3} /> */}
      <small>By {authorName}</small>
      <small> {post.published ? "#allB-blog" : "draft"}</small>

      <ReactMarkdown children={post.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
