
import { getSession } from "next-auth/client";
// import prisma from "../../../lib/prisma";
import {hash} from 'argon2'
import axios from "axios";
import { register } from "../../../services/auth";


export default async function handle(req, res) {
  console.log('check',req.body)
  const { name, email, phone, password, role } = req.body;

  const session = await getSession({ req });
  // console.log("post prisma structure", prisma);
  const hashed = await hash(password)
  if (!!!session) {

const user = await register({name, email, phone, password, role})


    const result = await user

    if(result){
      var baseUrl
      if(process.env.NODE_ENV==="development"){
    
        baseUrl= 'http://localhost:4000'
      } else {
        baseUrl="http://wwww.allbvegan.com"
      }
      console.log('user from proveder block in nextauth',user);
      const verificationRequest = await axios.post(`${baseUrl}/api/auth/verify`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type':'application/json'
        },
        ...user
      })
    }

    console.log('---=> from api',result);
    res.status(200).json(result);

  }
}
