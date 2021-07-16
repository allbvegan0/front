import axios from "axios";
import { getSession } from "next-auth/client";
// import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { name, email, phone, password, role } = req.body;



  const session = await getSession({ req });
  // console.log("post prisma structure", prisma);

  if (!!!session) {
    // const userId = await prisma.user.findUnique({
    //   where:{
    //     email: email
    //   }
    // })
    const userId = await  (await axios.get('http://localhost:4000/api/get-user-id',{data: email})).data()
    // const result = await prisma.account.create({
    //   data: {
    //     accessToken:"",
    //     accessTokenExpires:"",
    //     providerAccountId:"",
    //     providerId:"",
    //     compoundId:"",
    //     userId:Number(userId),
    //     providerType:"",
    //   },
    // });

    const result = await axios.post('http://localhost:4000/api/account-create',{
      data: {
                accessToken:"",
        accessTokenExpires:"",
        providerAccountId:"",
        providerId:"",
        compoundId:"",
        userId:Number(userId),
        providerType:"",
      }
    })
    console.log(result);
    res.json(result);
  }
}
