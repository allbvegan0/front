import axios from "axios";
import { getSession } from "next-auth/client";
// import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  // console.log("post prisma structure", prisma);
  // const result = await prisma.session.create({
  //   data: {
  //     sessionToken:"",
  //     accessToken:"",
  //     Device:{connect:{device_id: ''}},
  //     expires:"7",
  //     userId:1, 
  //   },
  // });
  const result = await axios.post("http://localhost:4000",{data:{
          sessionToken:"",
      accessToken:"",
      Device:{connect:{device_id: ''}},
      expires:"7",
      userId:1, 
  }})
  console.log(result);
  res.json(result);
}
