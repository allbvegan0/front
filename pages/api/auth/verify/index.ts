
import { NextApiRequest, NextApiResponse } from "next";
import { generateVerificationToken } from "../../../../helpers/jwt";
import { sendVerificationRequest } from "../../../../lib/nodemailer";
// import prisma from "../../../../lib/prisma";


export default async function handle(req : NextApiRequest, res: NextApiResponse) {
  const { token, userId, email } = req.body;
  var ms = new Date().getTime() + 86400000
  const tok = generateVerificationToken(userId)
  console.log('-=-=-=-=-=>',tok)
  // const result = await prisma.verificationRequest.create({
  //   data: {
  //     expires: new Date(ms),
  //     identifier:'email',
  //     token: tok,
    
  //   },
  //   select:{
  //     token: true,
  //     id: true,
  //     identifier: true

  //   }
  // });
  const result = await fetch('http://localhost:4000/auth')
  const _res = result.json()
  var baseUrl
  if(process.env.NODE_ENV==="development"){

    baseUrl= 'http://localhost:3000'
  } else {
    baseUrl="http://wwww.allbvegan.com"
  }
console.log('result--==> verification token',result)
  // sendVerificationRequest({
  //   identifier: email,
  //   baseUrl: baseUrl,
  //   token: "_data.token",
  //   // get above userId from session
  //   url:`${baseUrl}/api/auth/verify/email/${_res.token}`
  // }).then(data=>{
  //   console.log(data)
  //   // dispatch(commonActions.showToast({message:`Verify sent slip data ${data}`, type: "success"}))
  
  // }).catch(error=>{
  //   console.log(error)
  //   // dispatch(commonActions.showToast({message:`Verify sent slip data unsuccess`, type: "warn"}))

  // })


  // console.log(result);
  res.json(result);
}
