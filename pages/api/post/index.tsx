import axios from "axios";
import { getSession } from "next-auth/client";
// import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;
  const session = await getSession({ req });

  const result = await axios.get("http://localhost:4000/posts")
  console.log('posts-->',result);
  res.json(result);
}
