import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../../lib/prisma";

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.id;
  if (req.method === "DELETE") {
    // const post = await prisma.user.delete({
    //   where: { id: Number(userId) },
    // });
    const del_user = await axios.post("http://localhost:4000/delete-user",{
      data:{
        userId
      }
    })
    res.json(del_user);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
