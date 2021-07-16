import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../../lib/prisma";

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;
  if (req.method === "DELETE") {
    // const post = await prisma.post.delete({
    //   where: { id: Number(postId) },
    // });

    const del_post = await axios.post("http://localhost:4000/delete-post", {
      postId
    })
    res.json(del_post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
