import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.id;
  if (req.method === "PUT") {
    // const post = await prisma.user.update({
    //   where: { id: Number(userId) },
    //   data: {
    //     image: "s3:/ or local url",
    //   },
    // });
    const post = await axios.post("http://localhost:4000/update-user",{data:{userId}})
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
